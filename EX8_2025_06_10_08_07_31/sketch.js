let clignote = false;
let currentColor;

function setup() {
  createCanvas(600, 400);
  currentColor = color(220);
}

function draw() {
  if (clignote) {
    currentColor = color(random(255), random(255), random(255));
  }
  background(currentColor);
}

function mousePressed() {
  clignote = !clignote;
}
