let rot = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  rotate(rot)
  rot += PI / 180
  square(0,0, 50);
  console.log('nothing')
}
