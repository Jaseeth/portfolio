import test from 'node:test'
import assert from 'node:assert/strict'
import { submitContact } from '../src/services/contact.js'

const fields = { name: '  Portfolio visitor  ', email: 'visitor@example.com', subject: 'Project & collaboration', message: 'Hello — I would like to discuss a project.' }
const options = { recipient: 'owner@example.com', pageUrl: 'https://example.com/portfolio/contact/' }
const response = (success, message = '', ok = true) => ({ ok, json: async () => ({ success, message }) })

test('accepts explicit boolean or string success and forwards reply address and source', async () => {
  for (const success of [true, 'true']) {
    let request
    const result = await submitContact(fields, { ...options, fetchImpl: async (url, init) => { request = { url, init }; return response(success) } })
    assert.equal(result.accepted, true)
    assert.equal(request.url, 'https://formsubmit.co/ajax/owner%40example.com')
    const body = JSON.parse(request.init.body)
    assert.equal(body.name, 'Portfolio visitor')
    assert.equal(body._replyto, fields.email)
    assert.equal(body._subject, 'Portfolio enquiry: Project & collaboration')
    assert.equal(body._url, options.pageUrl)
    assert.equal(request.init.credentials, 'omit')
    assert.equal(body._autoresponse, undefined)
  }
})

test('never treats HTTP 200 with string false as success', async () => {
  await assert.rejects(submitContact(fields, { ...options, fetchImpl: async () => response('false', 'Unable to submit form') }), { code: 'submission' })
})

test('handles activation as a pending setup error, not delivered mail', async () => {
  await assert.rejects(submitContact(fields, { ...options, fetchImpl: async () => response('false', 'This form needs Activation. Check your email.') }), { code: 'activation' })
})

test('rejects HTTP failures, invalid JSON and missing success flags', async () => {
  for (const result of [response(true, '', false), { ok: true, json: async () => { throw new Error('not JSON') } }, { ok: true, json: async () => ({ message: 'unknown' }) }]) {
    await assert.rejects(submitContact(fields, { ...options, fetchImpl: async () => result }), { code: 'submission' })
  }
})

test('invalid, whitespace-only and oversized fields never send a request', async () => {
  for (const invalid of [{ name: ' ' }, { email: 'invalid' }, { subject: '' }, { message: ' ' }, { message: 'x'.repeat(1801) }]) {
    await assert.rejects(submitContact({ ...fields, ...invalid }, { ...options, fetchImpl: async () => assert.fail('unexpected request') }), { code: 'validation' })
  }
})

test('honeypot submissions never send a request', async () => {
  await assert.rejects(submitContact({ ...fields, website: 'bot-filled' }, { ...options, fetchImpl: async () => assert.fail('unexpected request') }), { code: 'spam' })
})

test('network failure has a direct-email fallback', async () => {
  await assert.rejects(submitContact(fields, { ...options, fetchImpl: async () => { throw new TypeError('Failed to fetch') } }), { code: 'network' })
})

test('timeouts abort instead of claiming success', async () => {
  await assert.rejects(submitContact(fields, {
    ...options, timeoutMs: 5,
    fetchImpl: (url, { signal }) => new Promise((resolve, reject) => signal.addEventListener('abort', () => reject(new DOMException('Aborted', 'AbortError')), { once: true })),
  }), { code: 'timeout' })
})
