let colors = {
    1: "red",
    2: "purple",
    3: "green",
    4: "yellow"
};

class Walker {
    constructor() {
        this.size = 100;
        this.x = width / 2;
        this.y = height / 2;
        this.prob = [-1, 1, 1];
    }

    display() {
        color = colors[ceil(random(Object.keys(colors).length))];
        stroke(color);
        strokeWeight(this.size);
        point(this.x, this.y);
    }

    step() {
        /* allows the walker to step randomly to any of the 8 pixels surrounding it */
        let prob_x = random(1);
        let prob_y = random(1);

        if (prob_x < 0.5) {
            if (this.x > 0) this.x += -this.size;
        }
        else {
            if (this.x < width) this.x += this.size;
        }

        if (prob_y < 0.5) {
            if (this.y > 0) this.y += -this.size;
        }
        else {
            if (this.y < height) this.y += this.size;
        }
    }
}