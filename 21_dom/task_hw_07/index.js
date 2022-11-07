const createButton = buttonText => {
  const bodyEl = document.querySelector('body');
  console.log(bodyEl);
  const newButton = document.createElement('button');
  newButton.textContent = buttonText;
  bodyEl.append(newButton);
};

createButton('Send Email');
