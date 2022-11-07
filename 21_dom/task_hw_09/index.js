const finishForm = () => {
  const inputLogin = document.createElement('input');
  inputLogin.setAttribute('type', 'text');
  inputLogin.setAttribute('name', 'login');
  const form = document.querySelector('form');
  form.prepend(inputLogin);
  const inputPass = document.querySelector('input[name = "password"]');
  inputPass.setAttribute('type', 'password');
};
finishForm();
