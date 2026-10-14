export class ContactSubmissionError extends Error {
  constructor(message, code = 'submission') {
    super(message)
    this.name = 'ContactSubmissionError'
    this.code = code
  }
}

export async function submitContact({ name, email, subject, message, website = '' }, { recipient, pageUrl, fetchImpl = fetch, timeoutMs = 20000 } = {}) {
  const fields = Object.fromEntries(Object.entries({ name, email, subject, message }).map(([key, value]) => [key, String(value || '').trim()]))
  if (!fields.name || !fields.subject || !fields.message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    throw new ContactSubmissionError('Please enter your name, a valid email address, subject and message.', 'validation')
  }
  if (fields.name.length > 100 || fields.email.length > 200 || fields.subject.length > 160 || fields.message.length > 1800) {
    throw new ContactSubmissionError('Please keep your message within the form’s length limits.', 'validation')
  }
  if (website) throw new ContactSubmissionError('Your message could not be submitted. Please email me directly.', 'spam')
  if (!recipient) throw new ContactSubmissionError('The contact service is unavailable. Please email me directly.', 'configuration')

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const response = await fetchImpl(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: controller.signal,
      credentials: 'omit',
      body: JSON.stringify({
        ...fields,
        _subject: `Portfolio enquiry: ${fields.subject}`,
        _replyto: fields.email,
        _template: 'table',
        _honey: website,
        _url: pageUrl,
      }),
    })
    const result = await response.json().catch(() => null)
    if (!response.ok || !(result?.success === true || result?.success === 'true')) {
      if (/activat|confirm|verif/i.test(String(result?.message || ''))) {
        throw new ContactSubmissionError('Email delivery is awaiting activation. Please use the email address alongside to reach me directly.', 'activation')
      }
      throw new ContactSubmissionError('Your message could not be submitted. Please try again or email me directly.')
    }
    return { accepted: true }
  } catch (error) {
    if (error instanceof ContactSubmissionError) throw error
    if (error.name === 'AbortError') {
      throw new ContactSubmissionError('The service took too long to respond, so delivery could not be confirmed. Please email me directly to avoid sending twice.', 'timeout')
    }
    throw new ContactSubmissionError('The contact service could not be reached. Please check your connection or email me directly.', 'network')
  } finally {
    clearTimeout(timeout)
  }
}
