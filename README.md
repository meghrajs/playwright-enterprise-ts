![CI](https://github.com/meghrajs/playwright-enterprise-ts/actions/workflows/ci.yml/badge.svg)

# Playwright Enterprise Framework (TypeScript)

Enterprise-style automation framework using **Playwright + TypeScript** for **UI + API + end-to-end** testing with CI-ready execution and reliability patterns.

📌 **Portfolio:** https://github.com/meghrajs/sdet-portfolio

---

## Highlights
- UI + API testing in a single framework
- Tagging (smoke/regression), parallel runs, retries strategy
- Artifacts on failure: screenshots, traces, videos
- Clean structure: pages, fixtures, test data builders, utilities
- CI-ready with GitHub Actions (artifacts + HTML report)

---

## Prerequisites
- Node.js **20+** (recommended: **22**)
- npm (bundled with Node)

---

## Setup (Local)
```bash
git clone https://github.com/meghrajs/playwright-enterprise-ts.git
cd playwright-enterprise-ts
npm ci
npx playwright install --with-deps
```

---

## Configure Environment (Optional)
This framework supports environment variables for UI and API base URLs.

1) Copy the example file:
```bash
cp .env.example .env
```

2) Update values if needed:
- `BASE_URL` — UI target base URL (default: `https://playwright.dev`)
- `API_BASE_URL` — API target base URL (default: `https://reqres.in`)

> If you don’t create a `.env`, defaults will be used.

---

## Running Tests (Local)

### Run everything
```bash
npm test
```

### Run UI tests only
```bash
npm run test:ui
```

### Run API tests only
```bash
npm run test:api
```

### Run smoke suite
```bash
npm run test:smoke
```

### Run regression suite
```bash
npm run test:regression
```

### View the HTML report
```bash
npm run report
```

---

## Test Tagging Convention
Use tags in test titles / describe blocks:
- `@ui` — UI tests
- `@api` — API tests
- `@e2e` — end-to-end (UI + API)
- `@smoke` — fast checks for PR validation
- `@regression` — broader suite

Examples:
- `UI — Playwright.dev @ui @smoke`
- `API — Users @api @smoke`
- `E2E — API → UI @e2e @regression`

---

## Project Structure
- `tests/ui` — UI-focused tests (page objects)
- `tests/api` — API tests (validation + negative scenarios)
- `tests/e2e` — end-to-end flows (API seed → UI validate)
- `src/pages` — page objects
- `src/fixtures` — shared fixtures and setup
- `src/utils` — helpers (logging, waits, data builders)
- `src/config` — environment + config utilities
- `.github/workflows` — CI workflows

---

## CI (GitHub Actions)
The workflow runs on PRs and pushes to `main`.

**Artifacts uploaded (always):**
- `playwright-report/` — HTML report
- `test-results/` — traces/screenshots/videos (when produced)

To view results:
1) Go to the **Actions** tab
2) Open the latest run
3) Download artifacts (`playwright-report`, `test-results`)

