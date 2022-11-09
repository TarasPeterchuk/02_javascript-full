import { tasks } from './storage.js';
import { renderTasks } from './tasksList.js';
const createBtn = document.querySelector('.create-task-btn');

export const createListEl = () => {
  const taskInput = document.querySelector('.task-input');
  if (taskInput.value !== '') {
    let obj = { text: taskInput.value, done: false };
    tasks.push(obj);
    taskInput.value = '';
    renderTasks(tasks);
  }
};
createBtn.addEventListener('click', createListEl);
