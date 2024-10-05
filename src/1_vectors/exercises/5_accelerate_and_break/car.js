let img

class Car{
    constructor(img){
        this.position = createVector(0, height / 2);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.image = img
        this.topSpeed = 10;
        
    }

    show() {
        image(this.image, this.position.x, this.position.y, 100, 50)
    }

    accelerate(){
        this.acceleration.add(0.01)
    }

    break(){
        this.acceleration.sub(0.01)
    }

    update(){
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }


}