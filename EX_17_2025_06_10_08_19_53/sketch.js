let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x = lerp(x, mouseX, 0.1);
  y = lerp(y, mouseY, 0.1);

  fill(x % 255, y % 255, 150);
  noStroke();
  ellipse(x, y, 30, 30);
}
