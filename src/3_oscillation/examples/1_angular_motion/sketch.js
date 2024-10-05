

let baton;
let xPress, xOffset;

function setup() {
  createCanvas(400, 400);
  baton = new Baton();
  xOffset = 0;
}

function mousePressed(){
  xPress = mouseX;
}

function mouseReleased() {
  xOffset = mouseX - xPress
  console.log(`xPress is ${xPress}`)
  console.log(`mouseX is ${mouseX}`)
  console.log(`xOffset is ${xOffset}`)
}

function draw() {
  background(220);
  baton.draw()
  baton.update(xOffset)
  xOffset = 0
}
