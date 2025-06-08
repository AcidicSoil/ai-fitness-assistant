Starting Task Master in Codex
Once the API keys are filled in, Codex can start the MCP server with the configured entry (task-master-ai). From Codex’s Command Palette or terminal, run the MCP start command (e.g., codex mcp start task-master-ai) so Task Master tools become available. You can then use commands like next_task, get_tasks, etc., directly from Codex or via the CLI (task-master ...).

This setup allows Codex to invoke Task Master AI automatically whenever you trigger a command, enabling task-driven workflows within this project.

<task_list>
codex task:add "Update .cursor/mcp.json with valid API keys from .env.example for the task-master-ai server."
codex task:add "Install task-master CLI globally using 'npm install -g claude-task-master' or prepare to run with npx."
codex task:add "Ensure non-API settings are set via 'task-master models --setup' and not through environment variables."
codex task:add "Verify Codex reads codex.config.js from the project root with correct settings: monorepo, apps, backend, model, provider."
codex task:add "Run 'codex mcp start task-master-ai' from terminal or Codex Command Palette to initialize the MCP server."
codex task:add "Test availability of task-master-ai commands like 'next_task' and 'get_tasks' via Codex interface or CLI."
codex task:run "Update .cursor/mcp.json with API keys and start MCP server to enable task-master-ai in Codex."
</task_list>