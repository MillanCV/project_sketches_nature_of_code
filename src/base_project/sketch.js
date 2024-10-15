

let readmeText;
let fullscreenButton;
let fs;

function preload() {
  readmeText = loadStrings('Readme.md');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(colors[3]);

  const whatIsThisButton = new ExplanationButton(20, 20, readmeText);

  fullscreenButton = createButton('Go Fullscreen');
  fullscreenButton.class('modern-button');
  fullscreenButton.position(20, 60); // Position below the first button
  fullscreenButton.mousePressed(toggleFullscreen);
}

function draw() {
  background(colors[3]);

  if (fullscreen()) {
    resizeCanvas(windowWidth, windowHeight);
  }
}

// Function to toggle fullscreen mode
function toggleFullscreen() {
  fs = fullscreen();
  fullscreen(!fs); // Toggle fullscreen mode

  // Resize the canvas when entering/exiting fullscreen
  if (!fs) {
    resizeCanvas(windowWidth, windowHeight); // Resize to window size
  } else {
    resizeCanvas(windowWidth, windowHeight); // Resize to window size
  }
}

// Adjust canvas size when window is resized
function windowResized() {
  if (!fullscreen()) {
    resizeCanvas(windowWidth, windowHeight);
  }
}