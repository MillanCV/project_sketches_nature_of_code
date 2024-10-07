
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
}


let flowfield;

function random_vectors() {
  for (let row = 0; row < flowfield.rows; row++) {
    for (let column = 0; column < flowfield.cols; column++) {
      flowfield.field[column][row] = p5.Vector.random2D();
    }
  }
}

function perlin_noise_vectors() {
  let xoff = 0;
  for (let column = 0; column < flowfield.cols; column++) {
    let yoff = 0;
    for (let row = 0; row < flowfield.rows; row++) {
      let angle = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);
      flowfield.field[column][row] = p5.Vector.fromAngle(angle);
      yoff += 0.1;
    }
  }
  xoff += 0.1;
}


function draw_grid() {
  for (let row = 0; row < flowfield.rows; row++)
    line(0, row * flowfield.resolution, windowWidth, row * flowfield.resolution);
  for (let column = 0; column < flowfield.cols; column++)
    line(column * flowfield.resolution, 0, column * flowfield.resolution, windowHeight);
}

function draw_vectors() {
  for (let row = 0; row < flowfield.rows; row++) {
    for (let column = 0; column < flowfield.cols; column++) {
      let vector = flowfield.field[column][row];
      x = (column * flowfield.resolution) + (flowfield.resolution / 2);
      y = (row * flowfield.resolution) + (flowfield.resolution / 2);
      line(x, y, x + (vector.x * flowfield.resolution / 2), y + (vector.y * flowfield.resolution / 2));

      point(x, y);
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  flowfield = new FlowField();
  console.log(`columnas ${flowfield.cols}`);
  console.log(`filas ${flowfield.rows}`);



  stroke('purple');
  strokeWeight(3);
  frameRate(1);


  background(255);
  draw_grid();
  perlin_noise_vectors();
  draw_vectors();

}



function draw() {



}
