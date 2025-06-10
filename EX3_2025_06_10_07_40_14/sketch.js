let boxSize = 20;

let posX = 123;
let posY = 234;

let vitX = 2;
let vitY = 1.234;

let visible = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
}

function draw() {
  background(220);


  if (frameCount % 15 === 0) {
    visible = !visible;
  }

  if (visible) {
    square(posX, posY, boxSize);
  }

  posX += vitX;
  posY += vitY;


  if (posX + boxSize > width || posX < 0) {
    vitX *= -1;
  }
  if (posY + boxSize > height || posY < 0) {
    vitY *= -1;
  }
}
