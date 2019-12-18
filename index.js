class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
    }
    // watching for the click events
    this.pauseButton.addEventListener("click", this.pause);

    this.startButton.addEventListener("click", this.start);
  }
  start = () => {
    if (this.onStart) {
      this.onStart();
    }
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 1;
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
  pause = () => {
    clearInterval(this.interval);
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  // 3 optional callbacks
  onStart() {
    //do something with the boarder animation
    console.log("timer strted ");
  },
  onTick() {
    //do something with the boarder animation
  },
  onComplete() {
    //so something with the border animation
  }
});
