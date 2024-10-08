class Balloon{
    constructor(){
        this.diameter = 50
        this.radius = this.diameter / 2
        this.position = createVector(width/2, height- this.radius)
        this.velocity = createVector()
        this.acceleration = createVector()
        this.helium_force = createVector(0, - 0.02)
        this.rebound_force = createVector()
    }

    apply_force(force){
        this.acceleration.add(force)
    }

    check_edges(){
        if((this.position.y - this.radius  < 0) & this.velocity.y < 0){
            this.velocity.y *= -0.5
        }
        if((this.position.x - this.radius  < 0) ){
            this.position.x = this.radius
        }
        else if(this.position.x + this.radius  > width  ){
            this.position.x = (width - this.radius)
        }
    }

    update(){
        
        this.apply_force(this.helium_force)
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
        this.check_edges()
        this.acceleration.mult(0)
    }

    show(){
        stroke(0)
        strokeWeight(0)
        fill(240, 0 , 210)
        circle(this.position.x, this.position.y, this.diameter)
    }
}