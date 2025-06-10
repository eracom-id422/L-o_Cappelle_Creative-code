let trail = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(240, 240, 255, 50); 

 
  trail.push({ x: mouseX, y: mouseY });

 
  if (trail.length > 50) {
    trail.shift();
  }


  for (let i = 0; i < trail.length; i++) {
    let pos = trail[i];
    let alpha = map(i, 0, trail.length, 50, 255); 
    fill(100, 150, 255, alpha);
    ellipse(pos.x, pos.y, 20);
  }
}
