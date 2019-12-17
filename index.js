class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    // watching for the click events
    this.pauseButton.addEventListener("click", this.pause);

    this.startButton.addEventListener("click", this.start);
  }
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  tick = () => {
    // get the text input and convert to a number
    const timeRemaining = parseFloat(this.durationInput.value);
    // update the value and put it back into the div
    this.durationInput.value = timeRemaining - 1;
  };
  pause = () => {
    clearInterval(this.interval);
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
