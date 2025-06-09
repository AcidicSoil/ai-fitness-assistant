# AGENTS.md

## 📘 Purpose

This file provides AI agents (e.g., Codex, Claude, GPT-4) and developers the full context to work effectively in this repo. It outlines project structure, setup instructions, contribution rules, and Codex environment configuration. Follow this file to operate within the AI Fitness Assistant project intelligently and efficiently.

---

## 🗂 Repository Overview

* `src/`: Mobile and backend logic (React Native, Express, AI workflows)
* `packages/`: Utilities (OCR parsers, AI fitness planner, database models)
* `scripts/`: DevOps and automation tooling
* `docs/`: Markdown plans, masterplan.md, architecture overviews
* `tests/`: Unit and E2E tests (Vitest, Detox, possibly Playwright for web)

Actively evolving areas include `src/ai/`, `packages/parser/`, and `src/features/workout`.

---

## ⚙️ Environment Setup (Codex UI)

To run this repo in a Codex execution environment:

### Container

Use: `universal`
Ubuntu 24.04 base with support for modern Node + Python stacks.

### Setup Script

```bash
# Setup script for Codex agents
pnpm install
pnpm dlx turbo run build
pnpm dlx turbo run test
```

### Agent Internet Access

✅ Turn ON (Required for downloading model weights, npm modules, and testing APIs)

---

## 🔬 Testing & CI

### Run all tests:

```bash
pnpm test
```

### Filter by package:

```bash
pnpm turbo run test --filter @fitness/parser
```

### Run specific test:

```bash
pnpm vitest run -t "OCR parses Pinterest screenshot"
```

### Linting:

```bash
pnpm lint --filter src/ai
```

> ✅ CI is enforced via GitHub Actions. All PRs must pass tests and linting.

---

## 🚀 PR Instructions

* **Title format**: `[parser] Improve OCR for handwritten images`
* One task per PR. Keep diffs small and well-described.
* Include `tests/` for all new or modified functionality.
* Use inline comments to explain AI logic or fuzzy decisions.

---

## 🤖 Prompting Codex

Codex performs best with structured directives.

### ✅ Good Prompts:

* "Parse workout from `tests/assets/pinterest-board1.png` and extract sets, reps, weights."
* "Improve GPT-based routine generator to avoid cardio repetitions. Validate output with `vitest`."

### ❌ Avoid:

* "Fix everything in src/"
* "Make it smarter"

### Debugging Tips:

* Include raw OCR or GPT output in prompt for context
* Use reproducible test cases with known inputs
* Enable logs via `DEBUG=ocr:* pnpm test`

---

## 🧠 Contribution Guidelines

* Prefer modular, testable components
* All parsers and AI logic should be stateless
* Maintain strict TypeScript settings
* Follow mobile-first UI conventions from the PRD

---

## 🧹 Related Configurations

* `.github/workflows`: CI/CD with lint/test jobs
* `turbo.json`: Task caching across workspaces
* `docs/masterplan.md`: Strategic roadmap and milestones
* `scripts/bootstrap.sh`: Local dev bootstrapping (if exists)

---

## 🔍 Optimization Opportunities

Codex agents can help:

* Improve OCR for mixed fonts (e.g. Pinterest handwriting)
* Expand GPT prompts for better goal-specific routines
* Build test images and synthetic datasets
* Translate user goals into structured fitness plans
* Localize UI flows with multilingual support

---

## 🧪 Example Prompt for Codex

```markdown
You are working in `/packages/parser/ocr.ts`.
Add fallback logic to use AWS Textract if Google Vision fails.
Then update `tests/ocr-handling.test.ts` to simulate fallback.
Validate with `pnpm test --filter @fitness/parser`.
```
