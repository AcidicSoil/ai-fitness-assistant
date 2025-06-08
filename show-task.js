#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get task ID from command line arguments
const taskId = process.argv[2];

if (!taskId) {
  console.error('Usage: node show-task.js <task_id>');
  process.exit(1);
}

// Pad task ID to 3 digits
const paddedId = taskId.toString().padStart(3, '0');
const taskFile = path.join('.taskmaster', 'tasks', `task_${paddedId}.txt`);

try {
  if (fs.existsSync(taskFile)) {
    const content = fs.readFileSync(taskFile, 'utf8');
    console.log(content);
  } else {
    console.error(`Task ${taskId} not found at ${taskFile}`);
    process.exit(1);
  }
} catch (error) {
  console.error('Error reading task file:', error.message);
  process.exit(1);
}

