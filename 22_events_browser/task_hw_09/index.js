const buttons = document.querySelectorAll('.pagination__page');
function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}
buttons.forEach(el => el.addEventListener('click', handleClick));
