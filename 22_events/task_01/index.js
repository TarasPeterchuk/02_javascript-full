const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');
const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color:${color}; margin-left: 8px"">${text}<span/>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const btnClear = document.querySelector('.clear-btn');
function handleClickClear() {
  eventsListElem.innerHTML = '';
}
// btnClear.addEventListener('click', handleClickClear);
btnClear.onclick = () => handleClickClear();

const btnHandlersAttach = document.querySelector('.attach-handlers-btn');
function handleClickAttach() {
  elemDiv.addEventListener('click', logGreenDiv);
  elemP.addEventListener('click', logGreenP);
  elemSpan.addEventListener('click', logGreenSpan);

  elemDiv.addEventListener('click', logGreyDiv, true);
  elemP.addEventListener('click', logGreyP, true);
  elemSpan.addEventListener('click', logGreySpan, true);
}
// btnHandlersAttach.addEventListener('click', handleClickAttach);
btnHandlersAttach.onclick = () => handleClickAttach();

const btnHandlersRemove = document.querySelector('.remove-handlers-btn');
function handleClickRemove() {
  elemDiv.removeEventListener('click', logGreenDiv);
  elemP.removeEventListener('click', logGreenP);
  elemSpan.removeEventListener('click', logGreenSpan);

  elemDiv.removeEventListener('click', logGreyDiv, true);
  elemP.removeEventListener('click', logGreyP, true);
  elemSpan.removeEventListener('click', logGreySpan, true);
}
// btnHandlersRemove.addEventListener('click', handleClickRemove);
btnHandlersRemove.onclick = () => handleClickRemove();

// handleClickAttach();
