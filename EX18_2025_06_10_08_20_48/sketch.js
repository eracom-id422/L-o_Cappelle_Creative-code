let t = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(240);
  translate(width / 2, height / 2);

  let r = map(sin(t), -1, 1, 20, 40);

  noStroke();
  fill(100, 150, 255);
  for (let i = 0; i < 6; i++) {
    rotate(60);
    ellipse(r, 0, r * 2, r);
  }

  fill(255, 220, 0);
  ellipse(0, 0, 30, 30);

  t += 2;
}
