let circles = [];

function setup() {
  createCanvas(600, 600);
  noFill();
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(0, 255, 255, 150);
  for(let i = circles.length - 1; i >= 0; i--){
    ellipse(0, 0, circles[i]);
    circles[i] += 5;
    if(circles[i] > width) circles.splice(i, 1);
  }
  if(frameCount % 10 == 0) circles.push(0);
}
