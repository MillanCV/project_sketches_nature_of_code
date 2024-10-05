let my_canvas

function setup() {
  my_canvas = createCanvas(400, 400);
}

function draw() {
  background(220);
  let width = my_canvas.width * 0.5
  let height = my_canvas.height * 0.5
  circle(width, height, windowWidth * 0.1)
  let color_circle = color(100)

}
