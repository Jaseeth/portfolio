# Jaseeth Mohamed — Portfolio

React / Vite portfolio with eight project case studies, employment history, education, recognition and direct contact options.

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

`src/data/siteData.js` contains the public profile, projects, employment, education and skills. Content follows the supplied October 2026 CV. External website URLs were supplied by the owner. McLaren Cafe includes a live homepage screenshot and a description based on its public pages; its project overview does not assert an unconfirmed personal contribution. Other graphics are illustrative system views. Topperformance distinguishes the original ASP.NET Core work from the current Shopify storefront.

The original CV is downloadable from `public/Mohamed_Jaseeth_Software_Developer_CV.pdf`. Update this file when changing résumé content. Certification entries are explicitly in progress; education dates follow the CV without asserting graduation status.

## Contact

The contact form submits directly to FormSubmit’s AJAX endpoint and forwards enquiries to the public profile email. Visitors stay on the page and do not need an email app. No API key or mailbox password is shipped to the browser. FormSubmit requires a one-time activation: submit a clearly labeled setup message from the live website, then click **Activate Form** in the recipient inbox (check Spam too). After activation, submit another test to verify inbox receipt. The sender’s address is included as Reply-To.

The form validates fields, blocks duplicate clicks while sending, includes a hidden honeypot, preserves the visitor’s input on failures and clears it only after an explicit successful provider response. HTTP 200 alone is not treated as success: both boolean and string success values are checked. Activation, rejection, offline and timeout responses show a direct-email fallback. A success response confirms provider acceptance, not guaranteed inbox delivery. Visitor-facing text discloses that FormSubmit processes form data. Contact-service privacy and availability are governed by https://formsubmit.co/.

Run the delivery-response tests with `node --test tests/contact.test.mjs`. They mock requests and do not send emails.

## Deployment

Build output is `dist/`. The optional `.github/workflows/deploy.yml` workflow is manual-only, so it does not launch a second deployment alongside the active branch publisher. If switching to it later, select **Settings → Pages → Source → GitHub Actions**, then dispatch the workflow. It derives the deployment base path from GitHub Pages, builds with Node.js 24 and npm, and publishes only `dist/`.

The current public repository is `Jaseeth/portfolio`, using **main /docs** branch publishing. Build with `VITE_BASE_PATH=/portfolio/`, then synchronize the generated `dist/` files to tracked `docs/` before committing. Include `.nojekyll` and remove obsolete generated asset files when synchronizing.

`npm run build:pages` builds the application and writes entry documents for every page and project route, plus `404.html` and `.nojekyll`. This supports direct links and refreshes on GitHub Pages without hash-based URLs. CV, favicon, scripts and styles honor the deployment prefix. The build generates per-project titles and descriptions in entry HTML; page content itself remains client-rendered. Unknown paths use the custom 404 document.

For a manual repository-path build in PowerShell, set `$env:VITE_BASE_PATH = '/repository-name/'`, then run `npm run build:pages`. Remove that environment variable for root-domain builds. `.vs/`, dependencies, build output, local environment files, temporary files and QA screenshots are excluded from Git.

On an IIS host, install URL Rewrite and use the included `public/web.config`, copied into the build, for SPA deep links and the original PDF. Ensure the host serves SVG and PDF assets. Test direct navigation and refresh on every project route after deployment.

Per-page metadata updates on client navigation. The Pages build includes per-project title and description metadata. Public domain / canonical URLs should be added once a deployment domain is selected. Deployment is only complete after a successful GitHub Actions run and a check of the public URL.
