import { tasks } from './storage.js';
import { renderTasks } from './tasksList.js';
import { createListEl } from './createListEl.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks(tasks);
});
