let stars = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 20; i++) {
    stars.push({ x: random(width), y: random(-200, -20), vy: 0 });
  }
}

function draw() {
  background(20);
  fill(255, 255, 0);
  noStroke();
  for (let s of stars) {
    star(s.x, s.y, 5, 10, 5);
    s.vy += 0.5;
    s.y += s.vy;
    if (s.y > height - 10) {
      s.vy *= -0.8;
      s.y = height - 10;
    }
  }
}

function star(x, y, r1, r2, n) {
  let angle = TWO_PI / n;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * r2;
    let sy = y + sin(a) * r2;
    vertex(sx, sy);
    sx = x + cos(a + angle / 2) * r1;
    sy = y + sin(a + angle / 2) * r1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
