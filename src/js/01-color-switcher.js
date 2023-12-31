const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', startChangingColor);
stopBtn.addEventListener('click', stopChangingColor);

let intervalId;
function startChangingColor() {
  startBtn.disabled = true;
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopChangingColor() {
  startBtn.disabled = false;
  clearInterval(intervalId);
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}
