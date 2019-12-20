const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  // 3 optional callbacks
  onStart() {
    //do something with the boarder animation
    console.log("timer started ");
  },
  onTick() {
    //do something with the boarder animation
    console.log("tick");
  },
  onComplete() {
    //so something with the border animation
    console.log("timer is completed");
  }
});
