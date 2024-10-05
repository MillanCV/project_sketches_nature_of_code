let walker;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.display();
}
