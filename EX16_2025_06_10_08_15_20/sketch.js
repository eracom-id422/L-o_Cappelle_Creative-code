let boxes = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    boxes.push({
      x: random(width),
      y: random(height),
      w: random(20, 50),
      h: random(20, 50),
      vx: random(-2, 2),
      vy: random(-2, 2)
    });
  }
}

function draw() {
  background(240);
  fill(0);
  noStroke();
  for (let b of boxes) {
    rect(b.x, b.y, b.w, b.h);
    b.x += b.vx;
    b.y += b.vy;

    if (b.x < 0 || b.x + b.w > width) b.vx *= -1;
    if (b.y < 0 || b.y + b.h > height) b.vy *= -1;
  }
}
