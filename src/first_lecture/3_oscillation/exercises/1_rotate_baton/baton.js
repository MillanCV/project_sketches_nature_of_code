class Baton {
    constructor(position){
        this.lenght = 10
        this.radius = 5
        this.angle = 0
        this.position = position
    }

    draw(){
        fill(127)
        stroke(0)
        rectMode(CENTER)
        translate(width/2, height/2)
        rotate(this.angle)
        line(-50, 0, 50, 0)
        strokeWeight(2)
        circle(50,0,16)
        circle(-50, 0, 16)
        this.angle += 0.01
    }
}