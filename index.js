class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;

    this.startButton = startButton;

    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);

    //
  }

  // start() {
  //   // need to get the instance of this in the class, not the button
  //   console.log(this);
  // }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
// this will run when the browser loads
// it is the instance of the timer class
// timer.start();
// console.log(this);
// const printThis = () => {
//   console.log(this);
// };

// how to determine what this is inisde of an arrow function- line 36 is same oas line 38
// const colors = {
//   printColor() {
//     console.log(this);
//     const printThis = () => {
//       console.log(this);
//     };
//     printThis();
//   }
// };
// colors.printColor();

////find this using old school bind, call or apply

const printThis = function() {
  console.log(this);
};

// // this gets the window
// printThis();

// // this gets the object
// printThis.call({ color: "red" });

// all other cases ////// - the period to the left of the function, inthis case colors
const colors = {
  printColor() {
    console.log(this);
  }
};

const randomObject = {
  a: 1
};

randomObject.printColor = colors.printColor;
randomObject.printColor();
