let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);


  x += (mouseX - x) * 0.05;
  y += (mouseY - y) * 0.05;

  fill(100, 150, 255);
  noStroke();
  ellipse(x, y, 50);
}
