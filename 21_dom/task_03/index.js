const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
};

const getItemsArray = () => {
  const elementsArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elementsArray);
  return elementsArray;
};
getItemsList();
getItemsArray();
