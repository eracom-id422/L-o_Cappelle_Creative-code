let crossColor;
let smallCrosses = [];

function setup() {
  createCanvas(600, 400);
  crossColor = color(255, 0, 0); // rouge
  rectMode(CENTER);
}

function draw() {
  background(30);

  fill(crossColor);
  noStroke();
  rect(width / 2, height / 2, 100, 20);
  rect(width / 2, height / 2, 20, 100);

  for (let c of smallCrosses) {
    drawSmallCross(c.x, c.y);
  }
}

function drawSmallCross(x, y) {
  fill(255);
  noStroke();
  rect(x, y, 20, 5);
  rect(x, y, 5, 20);
}

function mousePressed() {
  
  if (crossColor.toString() === color(255, 0, 0).toString()) {
    crossColor = color(255); // blanc

    for (let i = 0; i < 20; i++) {
      let px = random(width);
      let py = random(height);
      smallCrosses.push({ x: px, y: py });
    }
  } else {
    crossColor = color(255, 0, 0); 
    smallCrosses = []; 
  }
}

