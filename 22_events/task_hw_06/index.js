const btnClick = document.querySelectorAll('.btn');
function handleClick(event) {
  console.log(event.target.textContent);
}
btnClick.forEach(el => el.addEventListener('click', handleClick));
