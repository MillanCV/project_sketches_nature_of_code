class Mover {
    constructor(x, y, radius) {
        this.position = createVector(x, y);
        this.radius = radius;
        this.mass;
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);

        this.angle = 0;
        this.angleVelocity = 0;
        this.angleAcceleration = 0;

        this.damping = 0.99;
        this.maxSpeed = 20;
    }

    applyForceVector(gravity) {
        this.acceleration.add(gravity);
    }

    applyForceMag(magnitude) {
        let force = p5.Vector.fromAngle(this.angle);
        force.normalize();
        force.mult(magnitude);
        this.applyForceVector(force);
    }

    checkBordersWorld() {
        if ((this.position.y + this.radius) > windowHeight) {
            this.position.y = windowHeight - this.radius;
            this.velocity.y *= -0.7;
        }
        if ((this.position.y - this.radius) < 0) {
            this.position.y = this.radius;
            this.velocity.y *= -0.5;
        }
        if ((this.position.x - this.radius) < 0) {
            this.position.x = this.radius;
            this.velocity.x *= -1;
        }
        if ((this.position.x + this.radius) > windowWidth) {
            this.position.x = windowWidth - this.radius;
            this.velocity.x *= -0.5;
        }
        else {
            console.log("WTF");
        }
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.velocity.mult(this.damping);
        //this.velocity.limit(this.maxSpeed);

        this.angleVelocity += this.angleAcceleration;
        this.angle += this.angleVelocity;

        this.checkBordersWorld();

        this.acceleration.set();


    }

    rotateClockWise() {
        this.angle += PI / 4;
    }

    rotateAntiClockWise() {
        this.angle -= PI / 4;
    }

    draw() {
        stroke(255);
        strokeWeight(0);
        fill(255, 0, 0);
        push();
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        circle(0, 0, this.radius * 2);
        strokeWeight(2);

        line(0, 0, this.radius, 0);
        pop();
    }
}