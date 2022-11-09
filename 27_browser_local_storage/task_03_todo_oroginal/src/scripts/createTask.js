import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];
  console.log('old taskList', tasksList);
  const newTasksList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  console.log('new tasksList', newTasksList);

  setItem('tasksList', newTasksList);
  renderTasks();
};
