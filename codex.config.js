// codex.config.js (in your project root)
module.exports = {
  projectType: "monorepo",
  apps: ["frontend", "api"],
  backend: "api",
  model: "qwen3-4b-128k",
  provider: "ollama",
  approvalMode: "suggest",
};
