let walker;
function setup() {
  createCanvas(windowWidth, windowHeight);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.display();
}
