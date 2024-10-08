class Planet{
  constructor(x, y, mass, vel_x, vel_y) {
    this.mass = mass
    this.radius = this.mass
    this.position = createVector(x, y)
    this.velocity = createVector(vel_x, vel_y)
    this.acceleration = createVector()
  }

  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f)
  }

  update(){
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }

  draw(){
    stroke(0)
    strokeWeight(1)
    fill(200)
    circle(this.position.x, this.position.y, sqrt(this.mass) * 2)
  }
}

let earth, mars
let gravity

function setup() {
  createCanvas(400, 400);
  earth = new Planet(200, 200, 100, 0, 0)
  mars = new Planet(300, 300,10, 0, 1)
  gravity = createVector()

}

function draw() {
  background(220);

  gravity = p5.Vector.sub(earth.position, mars.position)
  let distance_mag = gravity.mag()
  distance_mag = constrain(distance_mag,5, 25)
  gravity.normalize()

  gravity.mult(earth.mass * mars.mass / (distance_mag*distance_mag))

  
  mars.applyForce(gravity)
  //earth.applyForce(gravity.mult(-1))
  //earth.update()
  mars.update()
  earth.draw()
  mars.draw()
}
