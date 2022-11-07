const inputText = document.querySelector('.text-input');
function inputToConsole() {
  console.log(inputText.value);
}
inputText.addEventListener('keyup', inputToConsole);
