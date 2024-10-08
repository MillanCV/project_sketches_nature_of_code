const sd = 60
console.log(p5)
const mean = 320 

function setup() {
  createCanvas(640, 400)
  background(200)
  generator = randomGaussian
  
}

function draw() {
  let num = generator()
  let x_pos = sd * num + mean
  let y_pos = randomGaussian(200, 80)
  let color = [randomGaussian(200,20),randomGaussian(100,30),randomGaussian(150,200)]

  noStroke();
  fill(color[0], color[1],color[2], 10)
  ellipse(x_pos, y_pos, 6, 6)

}
