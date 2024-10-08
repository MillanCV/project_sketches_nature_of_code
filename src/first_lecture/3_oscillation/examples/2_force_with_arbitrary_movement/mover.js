// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

class Mover {
    constructor(x, y, mass) {
      this.mass = mass;
      this.radius = mass * 8;
      this.position = createVector(x, y);
      this.velocity = createVector(1, 0);
      this.acceleration = createVector(0, 0);

      this.angle = 0;
      this.angleVelocity = 0.1;
      this.angleAcceleration = -0.0001;
      
    }
    // Newton's 2nd law: F = M * A
    // or A = F / M
    applyForce(force) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }
  
    update() {
      
      this.velocity.add(this.acceleration);     // Velocity changes according to acceleration
      
      this.position.add(this.velocity);         // position changes by velocity
      this.angleAcceleration = this.acceleration.x 
      
      this.acceleration.mult(0);                // We must clear acceleration each frame

      
      this.angleVelocity += this.angleAcceleration;
      this.angleVelocity = constrain(this.angleVelocity, -0.1, 0.1)
      this.angle += this.angleVelocity
    }
  
    show() {
      stroke(0);
      strokeWeight(2);

      push();   // save current state so the rotation doesn't affect the world
      
      translate(this.position.x, this.position.y);
      rotate(this.angle);

      fill(127, 127);
      circle(0, 0, this.radius * 2);
      line(0, 0, this.radius,0)
      pop();
    }
  }