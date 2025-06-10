function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  translate(mouseX, mouseY);
  for (let i = 0; i < 8; i++) {
    let angle = frameCount * 3 + i * 45;
    let x = cos(angle) * 30;
    let y = sin(angle) * 30;
    fill(100, 100, 255);
    ellipse(x, y, 10);
  }
}
