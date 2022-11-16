const baseUrl = 'https://6374b55948dfab73a4e65042.mockapi.io/todo_list/create_user';

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
}

const onFormSubmit = event => {
  event.preventDefault();
  createUser(Object.fromEntries(new FormData(formElem))).then(response => alert(response.json()));
  // .then(data => console.log(data));
  formElem.reset();
  buttonElem.setAttribute('disabled', true);
};

formElem.addEventListener('submit', onFormSubmit);

const changeButtonStatus = () => {
  if (formElem.reportValidity()) {
    buttonElem.removeAttribute('disabled', true);
  } else {
    buttonElem.setAttribute('disabled', true);
  }
};

formElem.addEventListener('input', changeButtonStatus);
