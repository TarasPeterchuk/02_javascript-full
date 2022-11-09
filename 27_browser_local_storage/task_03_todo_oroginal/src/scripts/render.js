import { getItem, setItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  //   .sort((a, b) => a.done - b.done)
  return new Date(b.createDate) - new Date(a.createDate);
};

export const createCheckboxElem = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkBoxElem = createCheckboxElem({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkBoxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  // console.log(tasksList);
  listElem.innerHTML = '';
  // const tasksElems = tasksList.sort(compareTasks).map(createListItem);
  const tasksElems = tasksList.map(createListItem);
  listElem.append(...tasksElems);
};
