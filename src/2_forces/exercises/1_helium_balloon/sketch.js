let balloon
let gravity
let wind

function setup() {
  createCanvas(600, 400);
  balloon= new Balloon()
  wind = new Wind()
}

function draw() {
  background(220)
  wind.update()
  balloon.apply_force(wind.force)
  balloon.update()
  balloon.show()
}
