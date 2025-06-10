function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(0);
  let steps = 30;
  for (let i = steps; i > 0; i--) {
    fill((frameCount * 5 + i * 10) % 255, 100, 255);
    ellipse(width / 2, height / 2, i * 20);
  }
}
