// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Example 1-1: Bouncing Ball, no vectors
// Variables for position and speed of ball.
let position;
let speed;

function setup() {
  createCanvas(640, 240);
  background(255);

  position = createVector(x = 25, y = 25);
  console.log(position.setMag(100))
  speed = createVector(x = 2.5, y = 5);
  console.log(speed.mag())
}

function draw() {
  background(200);

  // Move the ball according to its speed.
  position.add(speed.x, speed.y)

  //{!6} Check for bouncing.
  if (position.x > width - 25 || position.x < 25) {
    speed.x *= -1;
  }
  if (position.y > height - 25 || position.y < 25) {
    speed.y *= -1;
  }

  stroke(0);
  fill(127);
  strokeWeight(2);
  //{!1} Draw the ball at the position (x,y).
  circle(position.x, position.y, 50);
}
