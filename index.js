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
    // what do we want to do every second
    // show the time in the dom
    // decrment the anount of time so that the pause can be called at the correct time
    // likes time remaining = time remaining - 1 , but where is time remaining stored?
    // since this app us using user interactions makes more sense to grab out of the DOM  (normaly option 1 would be more desirable and more widely used.)
    

    console.log("tick");
  };
  pause = () => {
    clearInterval(this.interval);
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
