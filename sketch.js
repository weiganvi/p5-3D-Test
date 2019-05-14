let planets = [];

function preload() {
  img = loadImage('images/earth.jpg');
}

function setup() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; i++) {
      for (let k = 0; k < 5; i++) {
        let erde = new Planet(i * 100, j * 100, k * 100, 200);
        planets.push(erde);
      }
    }
  }

  // cam = createCapture(VIDEO);
  // cam.hide();
  createCanvas(1000, 800, WEBGL);
  ambientLight(50);
  directionalLight(200, 200, 200, 1, 1, -1);
}

function draw() {
  background(0);
  translate(0, -200, 100);
  rotateX(2);
  rotateY(0);
  translate(0, 0, -400);
  translate(0, 0, 100);

  if (keyIsPressed) {
    steering();
  }
  for (let planet of planets) {
    planet.show();
  }
}

class Planet {
  constructor(x, y, z, r) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.r = r;
  }
  show() {
    push();
    translate(this.x, this.y, this.z);
    rotateY(millis() / 5000);
    texture(img);
    noStroke();
    sphere(this.r);
    pop();
  }
}

function keyPressed() {
  return false; //prevents any default behaviour
}

function steering() {
  if (keyCode == UP_ARROW) {
    xAngle += 0.01;
  }
  if (keyCode == DOWN_ARROW) {
    xAngle -= 0.01;
  }
  if (keyCode == RIGHT_ARROW) {
    yAngle += 0.01;
  }
  if (keyCode == LEFT_ARROW) {
    yAngle -= 0.01;
  }
  if (key == 'e') {
    newPos(2);
  }
  if (key == 'd') {
    newPos(-2);
  }
}

function newPos(incr) {
  x += incr * sin(-yAngle) * cos(xAngle);
  y += incr * sin(xAngle);
  z += incr * cos(yAngle) * cos(xAngle);

}