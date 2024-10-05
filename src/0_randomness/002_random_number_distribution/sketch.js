let randomCounts

function setup() {
  createCanvas(640, 240);
  randomCounts = new Array(20).fill(0);
}

function draw() {
  background(220);

  let index = floor(random(randomCounts.length));
  randomCounts[index]++;

  stroke(0);
  fill(175);
  let w = width/randomCounts.length;

  for (let x = 0; x < randomCounts.length; x++){
    rect(x * w, height - randomCounts[x], w - 1, randomCounts[x]);
  }

}
