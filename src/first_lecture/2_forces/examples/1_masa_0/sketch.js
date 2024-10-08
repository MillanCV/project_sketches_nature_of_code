let moverA, moverB
let gravity

function setup() {
  createCanvas(400, 400);
  
  moverA = new Mover(50, 50, 50)
  moverB = new Mover(300, 50, 100)
  
  gravity = createVector(0, 0.1)
}

function draw() {
  background(220);

  let gravityA = p5.Vector.mult(gravity, moverA.mass)
  moverA.applyForce(gravityA)
  moverA.update()
  moverA.draw()
  
  let gravityB = p5.Vector.mult(gravity, moverB.mass)
  moverB.applyForce(gravityB)
  moverB.update()
  moverB.draw()
}
