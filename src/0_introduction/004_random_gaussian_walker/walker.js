function hello(){
    console.log('hello');
}



class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.prob = [-1, 1, 1]
    }
  
    display() {
        stroke(0);
        point(this.x, this.y);
    }
  
    step() {
        /* allows the walker to step randomly to any of the 8 pixels surrounding it */
        let prob_x = random(1);
        let prob_y = random(1);
        let step_size = randomGaussian(10, 2)
        
        if (prob_x < 0.5){
            this.x += -step_size;
        }
        else {
            this.x += step_size;
        }
        
        if (prob_y < 0.2){
            this.y += -step_size;
        }
        else {
            this.y += step_size;
        }
    }
  }