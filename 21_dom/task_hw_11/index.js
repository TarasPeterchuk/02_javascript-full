const squaredNumbers = () => {
  [...document.querySelectorAll('.number')].forEach(
    el => (el.dataset.squaredNumber = el.dataset.number ** 2),
  );
};
squaredNumbers();

// const squaredNumbers = () => {
//   const elements = document.querySelectorAll('.number');
//   console.log(elements);

//   [].forEach.call(elements, function (el) {
//     el.dataset.squaredNumber = el.dataset.number ** 2;
//     console.log(el);
//   });
// };

// const squaredNumbers = () => {
//   const elements = [...document.querySelectorAll('.number')];
//   elements.forEach(el => (el.dataset.squaredNumber = el.dataset.number ** 2));
// };
