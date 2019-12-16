// console.log("Hi there!");

// class Timer {
//   constructor(message) {
//     // eventualy what will be happining here is a constructor listening for the duration input, start button and pause button
//     // constructor will run methods based on what it "hears"
//     console.log(message);
//   }
// }
// new Timer("what up ");
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    // take the 3 arguments above and assing to an instace variable
    //  durationInput = "the value of the dom element input ";
    this.durationInput = durationInput;
    //  startButton = "the on click of the start button ";
    this.startButton = startButton;
    //  pauseButton = "the on click of the pause button";
    this.pauseButton = pauseButton;
    // set up teh event listener inside the constructor
    this.startButton.addEventListener("click", this.start);

    //
  }
  // outside of the constructor start the timer - method inside the class
  start() {
    console.log("Start the timer");
  }
}

// puting the query selectors here
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// create the  instance of the timer and pass in the 3 selected inputs
const timer = new Timer(durationInput, startButton, pauseButton);
