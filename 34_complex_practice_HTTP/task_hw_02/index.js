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
  createUser(Object.fromEntries(new FormData(formElem)))
    .then(response => response.text())
    .then(data => alert(data));
  formElem.reset();
  buttonElem.disabled = true;
};

formElem.addEventListener('submit', onFormSubmit);

// formElem.addEventListener('input', () => {
//   if (formElem.reportValidity()) {
//     buttonElem.disabled = false;
//   }
// });
