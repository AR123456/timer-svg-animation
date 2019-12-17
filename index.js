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
    //the tick()method will be responsible ofr updating text inisde of the timer
    // start will be responsible for kicking off start.
    // if start button is clicked get the durration input
    // pass that into tick
    // tick will do work of runnning timere and sending time to dom
    this.tick();
    // setInterval(this.tick, 1000);
    //setInterval returns an integer and its ID
    // need to set this to an instace timer
    this.interval = setInterval(this.tick, 1000);
  };
  tick = () => {
    console.log("tick");
  };
  pause = () => {
    // clearInterval is another JS built in function
    clearInterval(this.interval);
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
