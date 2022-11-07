const check = document.querySelector('.task-status');
function handleClick(event) {
  console.log(event.target.checked);
  console.log(event.target.value);
}
check.addEventListener('change', handleClick);
