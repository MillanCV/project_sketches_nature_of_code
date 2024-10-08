let car_img
let car

function keyPressed(){
  if(keyCode === UP_ARROW){
    car.accelerate()
  }
  else if(keyCode=== DOWN_ARROW){
    car.break()
  }
}

function preload() {
  car_img = loadImage('car.png');
}

function setup() {
  createCanvas(400, 400);
  car = new Car(car_img)
}

function draw() {
  background(220);
  car.update()
  car.show()
}
