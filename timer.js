class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
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
    // this.interval = setInterval(this.tick, 1000);
    //decreasing the interval to 50 ms to smooth the animation
    this.interval = setInterval(this.tick, 50);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // this.timeRemaining = this.timeRemaining - 1;
      // change time remaining to .05 to match up with the decrease in time of interval tick down of 50ms
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick();
      }
    }
  };
  pause = () => {
    clearInterval(this.interval);
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    // taking care of the many decimal points being rendered in the DOM as well as the floating point error
    this.durationInput.value = time.toFixed(2);
  }
}
