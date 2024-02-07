const redLight = document.getElementById("con-1");
const t1Text = document.getElementById("t1");

const yellowLight = document.getElementById("con-2");
const t2Text = document.getElementById("t2");

const greenLight = document.getElementById("con-3");
const t3Text = document.getElementById("t3");

function stopLight(color) {
  alert("Stopping " + color + " Light");
}

let redCounter = 0;
let yellowCounter = 0;
let greenCounter = 0;

// Function to blink the red light
const blinkRed = () => {
  if (redCounter < 4) {
    redLight.style.backgroundColor = isRed ? "red" : "transparent";
    isRed = !isRed;
    // Dynamically change the height of the text when red light is on
    t1Text.style.fontWeight = isRed ? "bold" : "Please Stop Your Vehicles";
    redCounter++;
  } else {
    redLight.style.backgroundColor = "grey";
    // redLight.style.border = "1px solid white  "; // Add a 2px solid white border
    t1Text.style.fontWeight = "normal";
    clearInterval(redInterval);
    yellowInterval = setInterval(blinkYellow, 1500);
  }
};

//  for yellow light

const blinkYellow = () => {
  if (yellowCounter < 3) {
    yellowLight.style.backgroundColor = isYellow ? "#E6C700" : "transparent";
    isYellow = !isYellow;
    t2Text.style.fontWeight = isRed ? "bold" : "Please Get Ready Go";
    yellowCounter++;
  } else {
    yellowLight.style.backgroundColor = "grey";
    // yellowLight.style.border = "1px solid white  ";
    t2Text.style.fontWeight = "normal";
    // Add a 2px solid white border
    clearInterval(yellowInterval);
    greenInterval = setInterval(blinkGreen, 2000);
  }
};

// for green light

const blinkGreen = () => {
  if (greenCounter < 4) {
    greenLight.style.backgroundColor = isGreen ? "green" : "transparent";
    isGreen = !isGreen;
    t3Text.style.fontWeight = isRed ? "bold" : "Please Go ";
    greenCounter++;
  } else {
    clearInterval(greenInterval);
    greenLight.style.backgroundColor = "grey";
    t3Text.style.fontWeight = "normal";
    // greenLight.style.border = "1px solid white  "; // Add a 2px solid white border
    redCounter = yellowCounter = greenCounter = 0;
    redInterval = setInterval(blinkRed, 800);
  }
};

let isRed = true;
let isYellow = true;
let isGreen = true;
let redInterval = setInterval(blinkRed, 1000);
let yellowInterval, greenInterval;
