const fs = require('fs');
const path = require('path');
const { randomUUID } = require('crypto');

// Path to the JSON file
const filePath = path.join(__dirname, 'tasks.json');

// Function to read tasks from the JSON file
function readTasks() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(filePath));
}

// Function to write tasks to the JSON file
function writeTasks(tasks) {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Function to add a new task
function addTask(title) {
    const tasks = readTasks();
    const newTask = { id: randomUUID(), title, status: 'not done' };
    tasks.push(newTask);
    writeTasks(tasks);
    console.log('Task added:', newTask);
}

// Function to update a task's status
function updateTask(id, status) {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
        task.status = status;
        writeTasks(tasks);
        console.log('Task updated:', task);
    } else {
        console.error('Task not found');
    }
}

// Function to delete a task
function deleteTask(id) {
    let tasks = readTasks();
    tasks = tasks.filter(t => t.id !== parseInt(id));
    writeTasks(tasks);
    console.log('Task deleted');
}

// Function to list all tasks
function listTasks() {
    const tasks = readTasks();
    console.log('All tasks:', tasks);
}

// Function to list done tasks
function listDoneTasks() {
    const tasks = readTasks();
    const doneTasks = tasks.filter(t => t.status === 'done');
    console.log('Done tasks:', doneTasks);
}

// Function to list not done tasks
function listNotDoneTasks() {
    const tasks = readTasks();
    const notDoneTasks = tasks.filter(t => t.status === 'not done');
    console.log('Not done tasks:', notDoneTasks);
}

// Function to list in-progress tasks
function listInProgressTasks() {
    const tasks = readTasks();
    const inProgressTasks = tasks.filter(t => t.status === 'in progress');
    console.log('In progress tasks:', inProgressTasks);
}

// Main function to handle command-line arguments
function main() {
    const [,, command, ...args] = process.argv;

    try {
        switch (command) {
            case 'add':
                if (args.length === 0) throw new Error('Title is required');
                addTask(args.join(' '));
                break;
            case 'update':
                if (args.length !== 2) throw new Error('ID and status are required');
                updateTask(args[0], args[1]);
                break;
            case 'delete':
                if (args.length !== 1) throw new Error('ID is required');
                deleteTask(args[0]);
                break;
            case 'list':
                listTasks();
                break;
            case 'list-done':
                listDoneTasks();
                break;
            case 'list-not-done':
                listNotDoneTasks();
                break;
            case 'list-in-progress':
                listInProgressTasks();
                break;
            default:
                console.error('Unknown command');
                break;
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
