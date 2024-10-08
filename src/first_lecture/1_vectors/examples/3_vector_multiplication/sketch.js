function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  let mouse = createVector(mouseX, mouseY)
  let center = createVector(width/2,height/2)

  stroke(200)
  strokeWeight(4)
  translate(center.x, center.y)

  mouse.sub(center)
  line(0,0, mouse.x, mouse.y)
  mouse.normalize()
  mouse.mult(50)
  stroke(0)
  strokeWeight(8)
  line(0,0, mouse.x, mouse.y)

  translate(-center.x, -center.y)
  textSize(10)
  strokeWeight(0)
  text(`magnitude is ${mouse.mag()}`, 10, 30)

  strokeWeight(10)
  strokeCap(SQUARE)
  line(10, 60, 10 + mouse.mag(), 60)

  
}
