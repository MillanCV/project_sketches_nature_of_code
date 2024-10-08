class Mover{
    constructor(x, y, mass){
        this.position = createVector(x, y)
        this.velocity = createVector()
        this.acceleration = createVector()
        this.mass = mass
    }

    applyForce(force){
        let f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f)
    }

    check_borders(){
        if(this.position.y + this.mass / 2 > height) {
            this.velocity.mult(-0.9)
        }
    }

    update(){
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.check_borders()
        this.acceleration.mult(0)
    }

    draw(){
        stroke(0)
        strokeWeight(2)
        fill(200)
        circle(this.position.x, this.position.y, this.mass)
    }
}