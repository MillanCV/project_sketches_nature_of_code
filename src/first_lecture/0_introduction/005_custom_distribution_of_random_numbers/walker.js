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
        let stepsize =  this.montecarlo_step()

        let step_x  = random(-stepsize, stepsize)
        let step_y  = random(-stepsize, stepsize)

        this.x += step_x
        this.y += step_y
    }

    montecarlo_step() {
        while(true) {
            let r_1 = random(0, 10)
            let r_2 = random(0, 3)
            
            if (r_2 < r_1) return r_1
        }
    }
  }