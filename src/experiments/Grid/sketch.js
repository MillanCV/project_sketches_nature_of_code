import { colors } from './utils/color_palette.js';
import Mover from './Mover.js';

let canvas;
let canvasWidth, canvasHeight;
let padding = 50; // You can change this variable to adjust padding
let mover; // Declare a mover variable

const sketch = (p) => {
  p.setup = function () {
    calculateCanvasSize();
    canvas = p.createCanvas(canvasWidth, canvasHeight);
    centerCanvas();
    mover = new Mover(p, p.width / 2, p.height / 2); // Pass p to Mover

  };

  p.draw = function () {
    p.background(colors[2]); // Background color from the colors palette
    drawGrid();
    mover.update(); // Update mover's position
    mover.edges(p); // Check for edge collisions
    mover.display(p); // Display the mover
  };

  p.windowResized = function () {
    // Recalculate canvas size and recenter when the window is resized
    calculateCanvasSize();
    p.resizeCanvas(canvasWidth, canvasHeight);
    centerCanvas(canvas);
  };

  // Calculate the canvas size while maintaining a 16:9 aspect ratio and considering padding
  function calculateCanvasSize() {
    let aspectRatio = 16 / 8;
    let availableWidth = p.windowWidth - 10 * padding;  // Available width after padding
    let availableHeight = p.windowHeight - 10 * padding; // Available height after padding

    // Determine the canvas dimensions based on the aspect ratio
    if (availableWidth / aspectRatio <= availableHeight) {
      // If width allows for the aspect ratio
      canvasWidth = availableWidth;
      canvasHeight = availableWidth / aspectRatio;
    } else {
      // If height allows for the aspect ratio
      canvasHeight = availableHeight;
      canvasWidth = availableHeight * aspectRatio;
    }
  }

  // Helper function to center the canvas
  function centerCanvas() {
    // Center the canvas in the window with the specified padding
    let x = (p.windowWidth - canvasWidth) / 2;
    let y = (p.windowHeight - canvasHeight) / 2;

    // Position the canvas with padding
    canvas.position(x, y);
  }

  function drawGrid() {
    p.stroke(colors[4]); // Set grid line color to black
    p.strokeWeight(1); // Set line thickness

    let gridSpacing = p.floor(canvasWidth / 10); // Adjust grid spacing based on canvas width
    console.log(gridSpacing);
    // Draw vertical lines
    for (let x = 0; x <= canvasWidth; x += gridSpacing) {
      p.line(x, 0, x, canvasHeight);
    }

    // Draw horizontal lines
    for (let y = 0; y <= canvasHeight; y += gridSpacing) {
      p.line(0, y, canvasWidth, y);
    }
  }
};

// Create a new p5 instance with the sketch
new p5(sketch);