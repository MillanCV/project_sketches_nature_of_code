import { colors } from './utils/color_palette.js';
import Mover from './Mover.js';

let canvas;
let canvasWidth = 800;
let canvasHeight = 800;
let padding = 50; // You can change this variable to adjust padding
let mover; // Declare a mover variable

const sketch = (p) => {
  p.setup = function () {
    canvas = p.createCanvas(canvasWidth, canvasHeight);
    mover = new Mover(p, p.width / 2, p.height / 2); // Pass p to Mover

  };

  p.draw = function () {
    p.background(colors["very-dark"]); // Background color from the colors palette
    drawGrid();
    mover.update(); // Update mover's position
    mover.edges(p); // Check for edge collisions
    mover.display(p); // Display the mover
  };


  function drawGrid() {
    p.stroke(colors["dark"]); // Set grid line color to black
    p.strokeWeight(1); // Set line thickness

    let gridSpacing = padding;
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