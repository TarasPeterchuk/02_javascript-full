import { tasks } from './storage.js';
import { createCheckboxElem } from './checkbox.js';

const listElem = document.querySelector('.list');
export const renderTasks = tasksList => {
  tasks.reduce((acc, el) => {
    el.id = acc;
    return (acc += 1);
  }, 0);
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = createCheckboxElem(done, id);
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);

  const tasksDom = document.querySelectorAll('.list__item-checkbox');
  const changeStatus = event => {
    const taskId = Number(event.target.dataset.id);
    const arraySearch = tasks.find(el => el.id == taskId);
    console.log(arraySearch);
    if (arraySearch.done === true) {
      arraySearch.done = false;
    } else {
      arraySearch.done = true;
    }
    renderTasks(tasks);
  };
  tasksDom.forEach(checkEl => checkEl.addEventListener('click', changeStatus));
};
