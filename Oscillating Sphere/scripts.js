// Array to hold your animation file names
const animations = [
  "animations/oscillating-sphere.js",
  "animations/reactive-mosaic.js",
];
const descriptions = ["Oscillating Sphere ", "Reactive Mosaic"];
let currentAnimationIndex = 0;

// Function to load a new p5.js animation
function loadAnimation(index) {
  // Remove the current animation if it exists
  if (window.myP5) {
    window.myP5.remove();
  }

  // Load the new animation
  let script = document.createElement("script");
  script.src = animations[index];
  script.onload = function () {
    // Update the description
    document
      .getElementById("description")
      .getElementsByTagName("h1")[0].innerText = descriptions[index];
  };
  document.head.appendChild(script);
}

// Functions to navigate between animations
function nextAnimation() {
  currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
  loadAnimation(currentAnimationIndex);
}

function previousAnimation() {
  currentAnimationIndex =
    (currentAnimationIndex - 1 + animations.length) % animations.length;
  loadAnimation(currentAnimationIndex);
}

// Initial load
loadAnimation(currentAnimationIndex);
