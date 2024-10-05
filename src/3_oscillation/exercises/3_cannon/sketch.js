let smallBall, bigBall;
let pressForce;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bigBall = new Mover(800, windowHeight - 50, 50);
  gravity = createVector(0, 0.1);
  forceMag = 0;
}

function draw() {
  background(50);

  // context info for debugging purposes


  // pressForce
  if (mouseIsPressed) {
    if (mouseButton === LEFT)
      forceMag += 0.5;
  }

  bigBall.applyForceVector(gravity);

  bigBall.update();
  bigBall.draw();
}

function mouseReleased() {
  forceMag *= -1;
  bigBall.applyForceMag(forceMag);
  forceMag = 0;
}

function mouseWheel(event) {
  if (event.delta > 0)
    bigBall.rotateClockWise();
  else
    bigBall.rotateAntiClockWise();

  //move the square according to the vertical scroll amount
  // pos += event.delta;
  //uncomment to block page scrolling
  //return false;
}