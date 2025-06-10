function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

function draw() {
  background(250);
  translate(width / 2, height / 2);
  
  let s = 100 + 20 * sin(frameCount * 0.1);

  fill(100, 255, 150);
  rect(0, 0, s, s / 2);
}
