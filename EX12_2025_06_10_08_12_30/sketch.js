function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  for (let i = 0; i < 360; i += 30) {
    push();
    rotate(i + frameCount);
    fill(255, 100, 150, 150);
    noStroke();
    ellipse(50, 0, 60, 30);
    pop();
  }

  fill(255, 200, 0);
  ellipse(0, 0, 40); 
}
