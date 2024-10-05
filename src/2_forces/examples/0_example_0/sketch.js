let mover
let wind

function setup() {
  createCanvas(400, 400);
  mover = new Mover()
  wind = createVector(0.002, 0.001)
  gravity = createVector(0, 0.01)
  wind = new Wind()
}

function draw() {
  background(220);
  mover.applyForce(wind.force)
  mover.applyForce(gravity)
  mover.update()
  mover.show()
}
