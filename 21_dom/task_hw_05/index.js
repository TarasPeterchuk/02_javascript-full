const setButton = buttonText => {
  const searchEl = document.querySelector('body');
  searchEl.innerHTML = `<button>${buttonText}</button>`;
};

console.log(setButton('sds'));
