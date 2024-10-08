class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.velocity.limit(1);
    this.acceleration = createVector(0,0);
    this.topSpeed = 10;
  }

  update() {
    let mouse = createVector(mouseX, mouseY)
    let direction = p5.Vector.sub(mouse, this.position)
    let distance = direction.mag()
    console.log(distance)
    direction.normalize()
    direction.mult(2/distance)
    console.log(direction.mag())
    this.acceleration = direction
    this.velocity.add(this.acceleration);
    this.limit(this.topSpeed);
    console.log(this.acceleration)
    console.log(this.velocity.mag())
    this.position.add(this.velocity);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = width0;
    } else if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.y > height) {
      this.position.y = height;
    } else if (this.position.y < 0) {
      this.position.y = 0;
    }
  }

  limit(max) {
    if (this.velocity.mag() > max) {
      this.velocity.normalize();
      this.velocity.mult(max);
    }
  }
}

let mover

function setup() {
  createCanvas(400, 400);

  mover = new Mover();
}

function draw() {
  background(220,30);

  mover.update();
  mover.checkEdges();
  mover.show();
}
