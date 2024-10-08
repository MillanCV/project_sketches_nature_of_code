class Water{
    constructor(x, y, w, h, c){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.c = c
    }

    show() {
        rectMode(CORNER)

        noStroke()
        fill("#3a3a45")
        rect(this.x, this.y, this.w, this.h)
    }

    contains(mover) {
        let pos = mover.position
        return (pos.x > this.x && pos.x < this.x + this.w && 
            pos.y > this.y && pos.y < this.y + this.h);
    }

    calculateDrag(mover){
        let speed = mover.velocity.mag()

        let dragMagnitude = this.c*speed*speed

        let dragForce = mover.velocity.copy()
        dragForce.mult(-1)
        dragForce.setMag(dragMagnitude)

        if (dragForce.mag() > speed){        
            dragForce.limit(speed)
        }   

        return dragForce
        
    }
}