

let baton;

function setup() {
  createCanvas(400, 400);
  baton = new Baton();
}

function draw() {
  background(220);

  baton.draw()
}
