let circles = [];
let noise_position;
let perlin_value;
let random_value;
let rect_height;

function setup() {
  createCanvas(400, 400);
  noise_position = 0;

}

function draw() {
  background(220);
  perlin_value = round(noise(noise_position), 4);
  rect_height = map(perlin_value, 0, 1, -200, 200)
  noise_position += 0.005;

  stroke(0)
  strokeWeight(2)
  fill(0,0,125)

  circle(width/2,height/2, rect_height)


  fill(200,0,0)
  let rect_width = 40
  rect((width/2)-(rect_width/2), height /2,rect_width, rect_height)

  
}