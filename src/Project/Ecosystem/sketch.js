let fishes = []
let water

function setup() {
  createCanvas(windowWidth, windowHeight);
  fish = new Fish()

  for (let i = 0; i< 5; i++ ){
    fishes.push(new Fish())
  }

  water = new Water(0, windowHeight / 2 , windowWidth, windowHeight, 0.05)
}
  

function draw() {
  background(50);
  water.show()

  for (let i = 0; i < fishes.length; i++ ){
    fishes[i].update()

    if (mouseIsPressed){
      let wind = createVector(1,1)
      fishes[i].applyForce(wind)
    }

    if(water.contains(fishes[i])) {
      let dragForce = water.calculateDrag(fishes[i])
      fishes[i].applyForce(dragForce)
    }
    
    fishes[i].draw()
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

