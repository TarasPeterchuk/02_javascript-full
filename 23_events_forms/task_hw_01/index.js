const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
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
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

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

const createBtn = document.querySelector('.create-task-btn');

const createListEl = () => {
  const taskInput = document.querySelector('.task-input');
  if (taskInput.value !== '') {
    let obj = { text: taskInput.value, done: false };
    tasks.push(obj);
    taskInput.value = '';
    renderTasks(tasks);
  }
};
createBtn.addEventListener('click', createListEl);

renderTasks(tasks);
