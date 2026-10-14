# Jaseeth Mohamed — Portfolio

React / Vite portfolio with seven CV-backed project case studies, employment history, education, recognition and direct contact options.

## Run locally

```sh
npm install
npm run dev
```

```sh
npm run build
npm run preview
```

Vite ignores Visual Studio's `.vs` index to avoid locked-file watcher errors.

## Content

`src/data/siteData.js` contains the public profile, projects, employment, education and skills. Content follows the supplied October 2026 CV. Project dates, external project URLs and GitHub links are omitted because they were not supplied. Graphics are original illustrative system views, not screenshots of client work. Replace them with approved screenshots when available.

The original CV is downloadable from `public/Mohamed_Jaseeth_Software_Developer_CV.pdf`. Update this file when changing résumé content. Certification entries are explicitly in progress; education dates follow the CV without asserting graduation status.

## Contact

The contact form opens a `mailto:` draft with encoded name, reply address, subject and message. Visitors must send the email from their mail app. It does not submit data to a server, store messages or claim delivery. Email, telephone and LinkedIn links provide direct alternatives. No contact-service account or credentials are required.

## Deployment

Build output is `dist/`. GitHub Pages deployment is configured in `.github/workflows/deploy.yml` and runs on pushes to `main` or manual dispatch. In the GitHub repository, select **Settings → Pages → Source → GitHub Actions** before the first deployment. The workflow derives the root or repository base path from GitHub Pages, builds with Node.js 24 and npm, and publishes only `dist/`.

`npm run build:pages` builds the application and writes entry documents for every page and project route, plus `404.html` and `.nojekyll`. This supports direct links and refreshes on GitHub Pages without hash-based URLs. CV, favicon, scripts and styles honor the deployment prefix. The build generates per-project titles and descriptions in entry HTML; page content itself remains client-rendered. Unknown paths use the custom 404 document.

For a manual repository-path build in PowerShell, set `$env:VITE_BASE_PATH = '/repository-name/'`, then run `npm run build:pages`. Remove that environment variable for root-domain builds. `.vs/`, dependencies, build output, local environment files, temporary files and QA screenshots are excluded from Git.

On an IIS host, install URL Rewrite and use the included `public/web.config`, copied into the build, for SPA deep links and the original PDF. Ensure the host serves SVG and PDF assets. Test direct navigation and refresh on every project route after deployment.

Per-page metadata updates on client navigation. The Pages build includes per-project title and description metadata. Public domain / canonical URLs should be added once a deployment domain is selected. Deployment is only complete after a successful GitHub Actions run and a check of the public URL.
