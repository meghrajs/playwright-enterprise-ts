# Playwright Enterprise Framework (TypeScript)

Enterprise-style automation framework using **Playwright + TypeScript** for **UI + API + end-to-end** testing with CI-ready execution and reliability patterns.

## Highlights
- UI + API testing in a single framework
- Tagging (smoke/regression), parallel runs, retries strategy
- Artifacts on failure: screenshots, traces, videos
- Clean structure: pages, fixtures, test data builders, utilities
- CI-ready with GitHub Actions

## Project Structure
- `tests/ui` — UI-focused tests (page objects)
- `tests/api` — API tests (schema/contract-style validation, negative tests)
- `tests/e2e` — end-to-end flows (UI + API combined)
- `src/pages` — page objects
- `src/fixtures` — fixtures and shared setup
- `src/utils` — helpers (waits, retries, data builders)
- `src/config` — env + config

## Running Tests (local)


## CI
GitHub Actions workflow will run:
- Smoke suite on PRs
- Full regression on schedule/manual trigger

## Roadmap
- Add baseline framework skeleton (config, fixtures, page objects)
- Add sample UI tests + API tests
- Add end-to-end flow (API seed → UI validate)
- Add CI workflow + badges
