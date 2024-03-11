// Define global variables for wave parameters
let r = 150; // Radius for the wave patterns
let waves = []; // Array to hold all the wave objects
let num = 10; // Number of waves to generate
let step = 10; // Step value to offset waves from each other

function setup() {
  createCanvas(600, 600); // Set the canvas size
  angleMode(DEGREES); // Use degrees for rotation angles
  stroke(255); // Set the drawing color for the waves

  // Create Wave objects and add to the waves array
  for (let i = 0; i < num; i++) {
    waves[i] = new Wave(i * step);
  }
}

function draw() {
  background(0); // Set the background color
  noFill(); // Do not fill shapes by default
  translate(width / 2, height / 2); // Move the origin to the center of the canvas

  // Display and move each wave in the waves array
  for (let wave of waves) {
    wave.display();
    wave.move();
  }
}