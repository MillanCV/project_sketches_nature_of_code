

let flowfield;
let mover;

function draw_grid() {
  for (let row = 0; row < flowfield.rows; row++)
    line(0, row * flowfield.resolution, windowWidth, row * flowfield.resolution);
  for (let column = 0; column < flowfield.cols; column++)
    line(column * flowfield.resolution, 0, column * flowfield.resolution, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  flowfield = new FlowField();
  mover = new Mover();
  draw_grid();
}



function draw() {
  background(255);
  flowfield.draw();
  flowfield.update();
  mover.applyForce(flowfield.lookup(mover.position).mult(0.01));
  mover.update();
  mover.show();
}
