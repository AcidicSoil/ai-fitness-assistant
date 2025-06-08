const fs = require('fs');
const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');

describe('show-task.js', () => {
  let tempDir;

  beforeEach(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'show-task-'));
    const taskDir = path.join(tempDir, '.taskmaster', 'tasks');
    fs.mkdirSync(taskDir, { recursive: true });
    fs.writeFileSync(path.join(taskDir, 'task_001.txt'), 'Sample Task Content');
  });

  afterEach(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
  });

  test('prints task content when task exists', () => {
    const result = spawnSync('node', [path.resolve(__dirname, '../show-task.js'), '1'], {
      cwd: tempDir,
      encoding: 'utf8'
    });
    expect(result.status).toBe(0);
    expect(result.stdout.trim()).toBe('Sample Task Content');
  });

  test('exits with error when task is missing', () => {
    const result = spawnSync('node', [path.resolve(__dirname, '../show-task.js'), '999'], {
      cwd: tempDir,
      encoding: 'utf8'
    });
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('Task 999 not found');
  });
});
