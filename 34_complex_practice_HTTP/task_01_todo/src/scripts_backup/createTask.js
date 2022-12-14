import { renderTasks } from './render.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';
  // const tasksList = getItem('tasksList') || [];
  // console.log('old taskList', tasksList);
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    // id: Math.random().toString(),
  };
  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });

  // const newTasksList = tasksList.concat();

  // const newTasksList = tasksList.concat({
  //   text,
  //   done: false,
  //   createDate: new Date().toISOString(),
  //   id: Math.random().toString(),
  // });
  // console.log('new tasksList', newTasksList);

  // renderTasks();
};
