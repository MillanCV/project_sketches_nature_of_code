class Fish{
    constructor() {
        this.size = 40
        this.position = createVector(random(this.size/2, width-this.size/2), random(this.size/20, height-this.size/2))
        this.velocity = createVector()
        this.acceleration = createVector()
    }

    applyForce(force){
        this.acceleration.add(force)
    }

    checkBorders() {
        if(this.velocity.x !== 0 && (this.position.x < 0 || this.position.x > width)) {
            this.velocity.x = 0
            this.position.x = this.position.x === 0 ? 0 : width
        }
        else if(this.velocity.y !== 0 && (this.position.y < 0 || this.position.y > height)){
            this.velocity.y = 0
            this.position.y = this.position.y === 0 ? 0 : height
        }
    }

    swim() {
        if (this.velocity.mag() <= 0) {
            this.velocity = createVector()
            let random_component = () => random(-1, 1)
            
            let swimmingForce = createVector(random_component(), random_component())
            swimmingForce.normalize()

            
            let magnitude = round(random(0, 10), 1)
            swimmingForce.setMag(magnitude)

            this.applyForce(swimmingForce)
        }
        else {
            let mag = this.velocity.mag() >= 0.1 ? round(this.velocity.mag() - 0.1, 1) : 0
            this.velocity.setMag(mag)
        }
    }

    update() {
        this.swim()
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.checkBorders()
        this.acceleration.mult(0)
    }

    draw(){
        rectMode(CENTER)

        stroke(200)
        
        // Draw cross
        strokeWeight(4)
        strokeCap(SQUARE)
        line(this.position.x - 10, this.position.y, this.position.x + 10, this.position.y)
        line(this.position.x, this.position.y -10, this.position.x, this.position.y + 10)
        
        // Draw square
        strokeJoin(ROUND)
        strokeWeight(6)
        noFill()
        
        square(this.position.x, this.position.y, this.size);
    }
}