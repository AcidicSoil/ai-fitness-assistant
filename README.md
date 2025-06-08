# AI Fitness Assistant

This project is a starting point for building a fitness assistant powered by various Task Master tools.

## Running Tests

Tests are not yet implemented, but a basic test runner has been added to provide a placeholder entry point. Execute the following command to run the test script:

```bash
npm test
```

This runs `node ./tests/test-runner.js`, which currently prints a message and exits successfully. Replace the contents of `tests/test-runner.js` with real tests as the project evolves.

## Viewing Task Details

The repository includes a small utility script for printing the contents of a task file from the `.taskmaster` directory. Run it with a task ID to quickly inspect a task:

```bash
node show-task.js <task_id>
```

Task IDs are numeric; the script automatically pads them to three digits to match the filenames in `.taskmaster/tasks/`.
The script lives in the repository root to serve as the single source of truth.

