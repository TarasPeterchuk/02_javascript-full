const inputElem = document.querySelector('.text-input');
function inputToConsole() {
  console.log(inputElem.value);
}
inputElem.addEventListener('change', inputToConsole);
