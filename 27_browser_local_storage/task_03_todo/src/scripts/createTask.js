import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskTetleInputElem = document.querySelector('.task-input');
  const text = taskTetleInputElem.value;
  if (!text) {
    return;
  }
  taskTetleInputElem.value = '';
  const tasksList = getItem('taskList') || [];
  console.log(text);
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTasksList);
  renderTasks();
};
