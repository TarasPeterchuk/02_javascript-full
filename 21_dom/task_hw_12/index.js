const getSection = num =>
  document.querySelector(`span[data-number="${num}"]`).parentElement.dataset.section;
console.log(getSection(4));

// const getSection = num => {
//   const spanSearch = document.querySelector(`span[data-number="${num}"]`).parentElement;
//   console.log(spanSearch.dataset);
// };
// getSection(4);
