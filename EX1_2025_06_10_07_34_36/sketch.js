let x, y;
let speedX, speedY;
let r, g, b;

function setup() {
  createCanvas(600, 400);
  x = width / 2;
  y = height / 2;
  speedX = random(-3, 3);
  speedY = random(-3, 3);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(30);

  r = (r + random(-5, 5)) % 255;
  g = (g + random(-5, 5)) % 255;
  b = (b + random(-5, 5)) % 255;

  fill(r, g, b);
  noStroke();
  ellipse(x, y, 50, 50);

  x += speedX;
  y += speedY;
  
  if (x < 25 || x > width - 25) {
    speedX *= -1;
  }
  if (y < 25 || y > height - 25) {
    speedY *= -1;
  }
}
