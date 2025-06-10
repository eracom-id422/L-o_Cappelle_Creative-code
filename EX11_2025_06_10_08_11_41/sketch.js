let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 30; i++) {
    bubbles.push({ x: random(width), y: random(height), size: random(20, 50) });
  }
}

function draw() {
  background(220, 230, 255);
  noStroke();
  for (let b of bubbles) {
    fill(100, 150, 255, 100);
    ellipse(b.x, b.y, b.size);
    b.y -= 1;
    if (b.y < -b.size) {
      b.y = height + b.size;
    }

    if (dist(mouseX, mouseY, b.x, b.y) < b.size / 2) {
      b.size = random(20, 50);
      b.y = height + b.size;
    }
  }
}
