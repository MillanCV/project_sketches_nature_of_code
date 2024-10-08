class Ball{
  constructor(gui){
    this.position = createVector(width/2, height/2)
    this.diameter = 100
    this.gui = this.addProperties(gui)
  }

  addProperties(gui){
    let folder = gui.addFolder(this)
    folder.add(this, 'diameter').name('Diameter')
    folder.add(this.position, 'x').name('Position X')
    folder.add(this.position, 'y').name('Position Y')

    return gui
  }

  draw(){
    stroke(0)
    strokeWeight(2)
    fill(255)
    circle(this.position.x, this.position.y, this.diameter)
  }
}




let ball
let gui = new dat.GUI()
function setup() {
  createCanvas(400, 400);
  ball_1 = new Ball(gui)
  ball_2 = new Ball(gui)

}

function draw() {
  background(220);

  ball_1.draw()
  ball_2.draw()
}
