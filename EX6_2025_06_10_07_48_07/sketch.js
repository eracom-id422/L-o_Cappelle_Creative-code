let x1 = 100;
let y1 = 200;
let x2 = 500;
let y2 = 200;

let radius = 40;

let vx1 = 2;
let vx2 = -2;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(240);

  fill(255, 100, 200);
  noStroke();
  ellipse(x1, y1, radius * 2);


  fill(100, 150, 255);
  ellipse(x2, y2, radius * 2);

  x1 += vx1;
  x2 += vx2;


  let d = dist(x1, y1, x2, y2);
  if (d < radius * 2) {
  
  vx1 *= -1;
    vx2 *= -1;
  }


  if (x1 - radius < 0 || x1 + radius > width) {
    vx1 *= -1;
  }
  if (x2 - radius < 0 || x2 + radius > width) {
    vx2 *= -1;
  }
}
