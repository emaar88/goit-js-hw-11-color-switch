const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const body = document.querySelector("body");
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// function startChangeColors(colors) {}

const changeColors = {
  isActive: false,
  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.timerId = setInterval(() => {
        const colorsChange = randomIntegerFromInterval(0, colors.length - 1);
        console.log(colorsChange);
        body.style.backgroundColor = colors[colorsChange];
      }, 1000);
    }
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
  }
};

startBtn.addEventListener("click", changeColors.start.bind(changeColors));
stopBtn.addEventListener("click", changeColors.stop.bind(changeColors));
