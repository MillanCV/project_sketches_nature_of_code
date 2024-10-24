// utils/Mover.js
export default class Mover {
    constructor(p, x, y) {
        this.position = p.createVector(x, y); // Use p5.js's createVector for position
        this.velocity = p.createVector(0, 0);
        this.acceleration = p.createVector(0, 0);
        this.size = 20; // Size of the mover
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0); // Reset acceleration to 0 after applying
    }

    display(p) {
        p.fill(127);
        p.ellipse(this.position.x, this.position.y, this.size, this.size);
    }

    edges(p) {
        if (this.position.x > p.width) {
            this.position.x = 0; // Wrap around to the left
        } else if (this.position.x < 0) {
            this.position.x = p.width; // Wrap around to the right
        }

        if (this.position.y > p.height) {
            this.position.y = 0; // Wrap around to the top
        } else if (this.position.y < 0) {
            this.position.y = p.height; // Wrap around to the bottom
        }
    }
}
