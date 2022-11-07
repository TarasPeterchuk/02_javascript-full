const check = document.querySelector('.task-status');
function handleClick(event) {
  console.log(event.target.checked);
}
check.addEventListener('change', handleClick);
