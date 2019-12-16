class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;

    this.startButton = startButton;

    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);

    //
  }
  // the value of this inside of class
  // this one runs with the on click
  start() {
    // the value of this inside of the class
    // this is the value of the button.
    // dont have access to all the methods
    console.log(this);
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
// this will run when the browser loads
// it is the instance of the timer class
timer.start();
