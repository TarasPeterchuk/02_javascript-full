const btnClick = document.querySelector('.single-use-btn');
function btnToConsole() {
  console.log('clicked');
  btnClick.removeEventListener('click', btnToConsole);
}
btnClick.addEventListener('click', btnToConsole);
