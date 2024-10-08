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
        let r = random()

        if (r < 0.01) {
            this.x += random(-100, 100)
            this.y += random(-100, 100)
        }
        else {
            this.x += random(-1, 1)
            this.y += random(-1, 1)
        }
    }
  }