const btnSearch = document.querySelector('.search__btn');
const inputSearch = document.querySelector('.search__input');
function inputToConsole() {
  console.log(inputSearch.value);
}
btnSearch.addEventListener('click', inputToConsole);
