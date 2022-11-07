const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');
const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}<span/>`;
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

function handleClickClear() {
  eventsListElem.innerHTML = '';
}
// btnClear.addEventListener('click', handleClickClear);
const btnClear = document.querySelector('.clear-btn');
btnClear.onclick = () => handleClickClear();

function handleClickAttach() {
  elemDiv.addEventListener('click', logGreenDiv);
  elemDiv.addEventListener('click', logGreyDiv, true);
  elemP.addEventListener('click', logGreenP);
  elemP.addEventListener('click', logGreyP, true);
  elemSpan.addEventListener('click', logGreenSpan);
  elemSpan.addEventListener('click', logGreySpan, true);
}
// btnHandlersAttach.addEventListener('click', handleClickAttach);
const btnHandlersAttach = document.querySelector('.attach-handlers-btn');
btnHandlersAttach.onclick = () => handleClickAttach();

function handleClickRemove() {
  elemDiv.removeEventListener('click', logGreenDiv);
  elemDiv.removeEventListener('click', logGreyDiv, true);
  elemP.removeEventListener('click', logGreenP);
  elemP.removeEventListener('click', logGreyP, true);
  elemSpan.removeEventListener('click', logGreenSpan);
  elemSpan.removeEventListener('click', logGreySpan, true);
}
const btnHandlersRemove = document.querySelector('.remove-handlers-btn');
// btnHandlersRemove.addEventListener('click', handleClickRemove);
btnHandlersRemove.onclick = () => handleClickRemove();

handleClickAttach();
