let carreX, carreY;
let carreSize = 100;
let petitsRectangles = [];

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
  carreX = width / 2;
  carreY = height / 2;
}

function draw() {
  background(220);

  // Dessine le carré noir principal
  fill(0);
  noStroke();
  square(carreX, carreY, carreSize);

  // Si la souris est sur le carré
  if (
    mouseX > carreX - carreSize / 2 &&
    mouseX < carreX + carreSize / 2 &&
    mouseY > carreY - carreSize / 2 &&
    mouseY < carreY + carreSize / 2
  ) {
    // Génère des petits rectangles noirs
    for (let i = 0; i < 5; i++) {
      petitsRectangles.push({
        x: random(width),
        y: random(height),
        w: 10,
        h: 10
      });
    }
  }

  // Affiche les petits rectangles noirs
  fill(0);
  for (let r of petitsRectangles) {
    rect(r.x, r.y, r.w, r.h);
  }
}
