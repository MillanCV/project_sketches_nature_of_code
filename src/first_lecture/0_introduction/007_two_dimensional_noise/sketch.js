let inc = 0.01
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  yoff = 0
  loadPixels();
  for(let y = 0; y < height; y++){
    xoff = 0
    for (let x = 0; x < width; x++){
      let bright = random(255)
      let index = (x + y * width) * 4
      let r = noise(xoff, yoff) * 255
      pixels[index] = bright
      pixels[index+1] = bright
      pixels[index+2] = bright
      pixels[index+3] = 255

      xoff += inc
    }
    yoff += inc
  }
  updatePixels()
}
