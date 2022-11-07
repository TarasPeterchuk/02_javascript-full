const inputText = document.querySelector('.text-input');
function handleClick(event) {
  console.log(event.target.value);
}
inputText.addEventListener('change', handleClick);
