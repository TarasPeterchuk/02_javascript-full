const setLiText = (el, text) => {
  el.textContent = text;
  return el;
};

const finishList = () => {
  const listEl1 = document.createElement('li');
  const listEl4 = document.createElement('li');
  const listEl6 = document.createElement('li');
  const listEl8 = document.createElement('li');
  const list = document.querySelector('.list');
  list.append(setLiText(listEl8, 8));
  list.prepend(setLiText(listEl1, 1));
  const fifthLi = document.querySelector('.special');
  fifthLi.before(setLiText(listEl4, 4));
  fifthLi.after(setLiText(listEl6, 6));
};

finishList();
