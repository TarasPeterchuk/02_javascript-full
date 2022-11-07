const check = document.querySelector('.task-status');
handleClick = event => console.log(event.target.checked);

check.addEventListener('change', handleClick);
