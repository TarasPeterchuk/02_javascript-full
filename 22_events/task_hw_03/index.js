const checkboxElem = document.querySelector('.task-status');
function checkToConsole() {
  console.log(checkboxElem.checked);
  console.log(checkboxElem.value);
}
checkboxElem.addEventListener('change', checkToConsole);
