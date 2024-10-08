
class FlowField {
    constructor() {
        this.resolution = 50;
        this.cols = floor(windowWidth / this.resolution);
        this.rows = floor(windowHeight / this.resolution);

        this.field = new Array(this.cols);
        for (let i = 0; i < this.cols; i++)
            this.field[i] = new Array(this.rows);


        for (let i = 0; i < this.cols; i++)
            for (let j = 0; j < this.rows; j++) {
                let vector = p5.Vector.random2D();
                this.field[i][j] = vector;
                console.log(vector);
            }
    }

    update() {
        noiseSeed(100);
        let noiseLevel = 255;
        let noiseScale = 0.009;
        let xoff = 0;
        for (let column = 0; column < this.cols; column++) {
            let yoff = 0;
            for (let row = 0; row < this.rows; row++) {
                let angle = map(noise(xoff, yoff, frameCount * 0.01), 0, 1, 0, TWO_PI);
                this.field[column][row] = p5.Vector.fromAngle(angle);
                yoff += 0.1;
            }
        }
        xoff += 0.1;
    }

    lookup(position) {
        let column = constrain(floor(position.x / this.resolution), 0, this.cols - 1);
        let row = constrain(floor(position.y / this.resolution), 0, this.rows - 1);
        let vector_pos = this.field[column][row].copy();
        return vector_pos;
    }

    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.cols; column++) {
                let vector = this.field[column][row];
                let x = (column * this.resolution) + (this.resolution / 2);
                let y = (row * this.resolution) + (this.resolution / 2);
                stroke('purple');
                strokeWeight(2);
                line(x, y, x + (vector.x * this.resolution / 2), y + (vector.y * this.resolution / 2));

                strokeWeight(5);
                point(x, y);
            }
        }
    }
}
