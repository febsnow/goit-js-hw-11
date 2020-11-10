const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
  startBtn: document.querySelector('[data-action=start]'),
  stopBtn: document.querySelector('[data-action=stop]'),
  body: document.querySelector('body'),
};

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const minValue = 0;
const maxValue = colors.length - 1;

function setBodyColor() {
  const pickedColor = colors[randomIntegerFromInterval(minValue, maxValue)];
  refs.body.style.backgroundColor = pickedColor;
}

refs.startBtn.addEventListener('click', onStartbtnClick);

let changeColorInterval = null;

function onStartbtnClick() {
  refs.startBtn.disabled = true;
  changeColorInterval = setInterval(setBodyColor, 1000);
}

refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  clearInterval(changeColorInterval);
}
