# AGENTS.md

## 📘 Purpose

This file provides AI agents (e.g., Codex, Claude, GPT-4) and developers with all the context needed to work efficiently in this monorepo. It outlines project structure, setup steps, agent prompting conventions, and Codex-specific execution instructions.

---

## 📂 Repository Overview

This monorepo powers the **AI Fitness Assistant** with a split between mobile-first client logic and API+AI services:

* `frontend/`: React Native app for iOS/Android
* `backend/`: Node.js + Express server with AI/OCR integrations

Additional directories:

* `scripts/`: Utility scripts and automation
* `docs/`: Product planning and PRDs
* `tests/`: Shared Vitest-based test utilities

---

## ⚙️ Environment Setup (Codex UI)

To run this repo in a Codex execution environment:

### Container

Use: `universal` (Ubuntu 24.04 + pnpm + Node.js)

### Setup Script

```bash
# Codex monorepo setup for AI Fitness App
pnpm install
pnpm --filter frontend run build
pnpm --filter backend run build
pnpm test
```

### Agent Internet Access

Turn **ON** to fetch npm packages and API models.

---

## 🔬 Testing & CI

### Run all tests:

```bash
pnpm test
```

### Filter by workspace:

```bash
pnpm --filter frontend test
pnpm --filter backend test
```

### Target specific test:

```bash
pnpm vitest run -t "<test name>"
```

### Lint code:

```bash
pnpm lint --filter frontend
pnpm lint --filter backend
```

> ✅ Codex agents must ensure tests and linting pass before merging code.

---

## 🚀 PR Instructions

* **Title format**: `[frontend] Parse board image` or `[backend] Add GPT workout endpoint`
* Keep changes atomic and explain reasoning with markdown-style comments if complex.
* Avoid bundling unrelated changes.

---

## 🤖 Prompting Codex

Effective Codex prompts:

### ✅ Good Prompts:

* "Parse workout images in `backend/src/ocr/parse.ts` using Google Vision API."
* "Generate workouts in `backend/src/ai/generator.ts` using GPT-4. Use goals and equipment as inputs."
* "Add tracking UI to `frontend/src/components/WorkoutPlayer.tsx` to mark exercises complete."

### ❌ Avoid:

* "Improve app"
* "Refactor everything"

### Debugging Aids:

* Include stack traces in prompts.
* Use logs or example input/output.
* Add `TODO:` comments in code for unclear steps.

---

## 🧠 Contribution Guidelines

* TypeScript (strict mode) enforced in all workspaces.
* All new features must have test coverage.
* Format with:

```bash
pnpm format
```

* Use composable, clean code. Follow existing style.

---

## 🧰 Codex-Compatible Configurations

* `.github/workflows/`: GitHub Actions CI
* `pnpm-workspace.yaml`: Declares shared context
* `turbo.json`: (if present) Speed up builds/tests
* `vitest.config.ts`: Unified test runner config

---

## 🔍 Optimization Tasks for Codex

Codex can help with:

* Backend OCR retry logic
* AI prompt chaining for smarter workouts
* Creating demo flows in the mobile app
* Adding calendar sync code using Google API
* Building progress analytics using PostgreSQL queries

---

## 🥺 Example Prompt for Codex

```markdown
You are working in `backend/src/ai/generator.ts`.

Improve the workout plan generator to support bodyweight-only workouts and adjust difficulty dynamically based on previous performance.

Test with `pnpm --filter backend test`. Update docs in `docs/README.md`.
```

---
