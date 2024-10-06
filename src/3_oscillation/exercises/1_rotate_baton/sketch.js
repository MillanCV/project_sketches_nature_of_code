

let baton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baton = new Baton();
}

function draw() {
  background(220);

  baton.draw();
}
