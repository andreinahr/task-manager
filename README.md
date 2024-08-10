# Task Manager

This is a repository for the Task Manager project.
The project aims to provide a simple and efficient task management system.

## Installation

To use the Task Manager, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/task-manager.git`
2. Navigate to the project directory: `cd task-manager`
3. Install the dependencies: `npm install`

## Usage
Navigate to the project directory: `cd task-manager`
To use the Task Manager, you can try the folling commands:
- Add a task:
```bash
node taskManager.js add "YOUR_TASK"
```
- Update a task's status:
```bash
node taskManager.js update <id> "STATUS"
```
  - Status available are `done`, `in progress` and `not done`
- Delete a task:
```bash
node taskManager.js delete <id>
```
- List all tasks:
```bash
node taskManager.js list
```
- List done tasks:
```bash
node taskManager.js list
```
- List not done tasks:
```bash
node taskManager.js list-not-done
```
- List in-progress tasks:
```bash
node taskManager.js list-in-progress
```

## Features

- Create tasks
- Mark tasks as done
- Edit task status
- Delete tasks
- List tasks by status (done or in progress)

## Contributing
