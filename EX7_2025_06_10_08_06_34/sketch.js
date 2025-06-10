let boucheOuverte = true;
let timer = 0;
let interval = 30;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
}

function draw() {
  background(240);

  fill(255, 220, 180);
  ellipse(width / 2, height / 2, 200, 250);

  fill(0);
  ellipse(width / 2 - 40, height / 2 - 40, 20, 20);
  ellipse(width / 2 + 40, height / 2 - 40, 20, 20);

  fill(0);
  if (boucheOuverte) {
    ellipse(width / 2, height / 2 + 50, 50, 30);
  } else {
    rectMode(CENTER);
    rect(width / 2, height / 2 + 50, 50, 5); 
  }

  timer++;
  if (timer > interval) {
    boucheOuverte = !boucheOuverte;
    timer = 0;
  }
}
