let x, y;
let speedX, speedY;
let baseSize;
let sizeOffset;
let growing;

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;
  speedX = 3;
  speedY = 2;
  baseSize = 50;
  sizeOffset = 0;
  growing = true;
}

function draw() {
  background(240);

  if (growing) {
    sizeOffset += 0.5;
    if (sizeOffset > 20) growing = false;
  } else {
    sizeOffset -= 0.5;
    if (sizeOffset < -10) growing = true;
  }

  let currentSize = baseSize + sizeOffset;

  fill(0);
  noStroke();
  ellipse(x, y, currentSize, currentSize);

  // Déplacer la boule
  x += speedX;
  y += speedY;

  if (x < currentSize / 2 || x > width - currentSize / 2) {
    speedX *= -1;
  }
  if (y < currentSize / 2 || y > height - currentSize / 2) {
    speedY *= -1;
  }
}
