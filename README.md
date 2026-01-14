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
