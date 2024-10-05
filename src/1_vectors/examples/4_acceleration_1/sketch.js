class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.velocity.limit(1);
    this.acceleration = createVector(-0.001, 0.01);
    this.topSpeed = 10;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.limit(this.topSpeed);
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
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }

  limit(max) {
    if (this.velocity.mag() > max) {
      this.normalize();
      this.mult(max);
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
