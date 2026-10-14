import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve, join } from 'node:path'
import { projects } from '../src/data/siteData.js'

// GitHub Pages has no SPA rewrite rules. Give every valid route its own entry
// document so direct links and refreshes return 200 without hash-based URLs.
const dist = resolve('dist')
const index = await readFile(join(dist, 'index.html'), 'utf8')
const routes = [
  ['about', 'About'],
  ['experience', 'Experience & Education'],
  ['projects', 'Selected Projects'],
  ['contact', 'Contact'],
  ...projects.map(project => [`projects/${project.slug}`, project.title]),
]
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
for (const [route, title] of routes) {
  const directory = join(dist, route)
  await mkdir(directory, { recursive: true })
  const project = projects.find(item => route === `projects/${item.slug}`)
  let html = index.replace(/<title>.*?<\/title>/, `<title>${escape(title)} | Jaseeth Mohamed</title>`)
  html = html.replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(title)} | Jaseeth Mohamed`)
  if (project) {
    html = html.replace(/(<meta name="description" content=")[^"]*/, `$1${escape(project.summary)}`)
    html = html.replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(project.summary)}`)
  }
  await writeFile(join(directory, 'index.html'), html)
}
await writeFile(join(dist, '404.html'), index.replace('<head>', '<head><meta name="robots" content="noindex" />'))
await writeFile(join(dist, '.nojekyll'), '')
console.log(`Prepared ${routes.length + 1} GitHub Pages routes, a 404 page, and .nojekyll.`)
