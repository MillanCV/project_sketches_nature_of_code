function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  const SCALAR = 0.5

  let mouse = createVector(mouseX, mouseY)
  let center = createVector(width / 2, height / 2)
  mouse.sub(center)
  
  stroke(150)
  strokeWeight(4)
  translate(center.x, center.y)
  line(0, 0, mouse.x, mouse.y)

  mouse.mult(SCALAR)
  stroke(0)
  strokeWeight(8)
  line(width / 2, height / 2, mouse.x, mouse.y)

  
}
