function hello(){
    console.log('hello');
}



class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.tx = 0
        this.ty = 10000
    }
  
    display() {
        stroke(0);
        point(this.x, this.y);
    }
  
    step() {
        // this.x = map(noise(this.tx), 0, 1, 0, windowWidth)
        // this.y = map(noise(this.ty), 0, 1, 0, windowHeight)

        //this.tx += 0.01
        //this.ty += 0.01

        let stepsize =  map(noise(this.tx), 0, 1, 0, 20)

        let step_x  = random(-stepsize, stepsize)
        let step_y  = random(-stepsize, stepsize)

        this.x += step_x
        this.y += step_y
    }

   
  }