const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
// select the clock circle
const circle = document.querySelector("circle");
// geting value of r or radious - need for calculation if the circumference
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
//set stroke dasharray value to be perimeter of circle
circle.setAttribute("stroke-dasharray", perimeter);
// set stoke dashoffset with each tick of the clock or second
let currentOffset = 0;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    //do something with the boarder animation
    console.log("timer started ");
  },
  onTick() {
    //do something with the boarder animation
    circle.setAttribute("stroke-dashoffset", currentOffset);
    // currentOffset = currentOffset - 50;
    // changing offset to one px to smooth the animation
    currentOffset = currentOffset - 1;
  },
  onComplete() {
    //so something with the border animation
    console.log("timer is completed");
  }
});
