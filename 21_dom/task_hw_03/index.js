export const getTitle = () => {
  const searchEl = document.querySelector('.title');
  return searchEl.textContent;
};
export const getDescription = () => {
  const searchEl = document.querySelector('.about');
  return searchEl.innerText;
};
export const getPlans = () => {
  const searchEl = document.querySelector('.plans');
  return searchEl.innerHTML;
};
export const getGoal = () => {
  const searchEl = document.querySelector('.goal');
  return searchEl.outerHTML;
};

console.log(getTitle());
console.log(getDescription());
console.log(getPlans());
console.log(getGoal());
