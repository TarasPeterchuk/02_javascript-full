const inputText = document.querySelector('.text-input');
function handleClick() {
  console.log(event.target.value);
}
inputText.addEventListener('change', handleClick);
