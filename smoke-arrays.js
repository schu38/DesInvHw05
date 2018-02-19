var x = 210;
var y = 290;
var r = 0;

var y2 = 200;

function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 100; i = i + 1) {
    x[i] = i + 10;
    y[i] = i + 19;
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  // save graphics state
  for (i = 0; i < 500; i = i + 10) {
  push();
  // darker as it gets closer to 0
  fill(y);
  // rotate r around (x,y)
  translate(x, y);
  rotate(r);
  // draw rectangle
  rect(-x[i], -25, 20, 25);
	rect(-15, -15, 25, 35);
  // reset rotation and translation
  pop();
  // up 3 pixels
  y -= 3;
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  // if reach past the top a bunch
  if (y < -150) {
    y = 290;
  	}
  }
  
  for (i = 0; i < 100; i = i + 35) {
  push();
  // darker as it gets closer to 0
  fill(y2);
  // rotate r around (x,y)
  translate(x, y2);
  rotate(r);
  // draw rectangle
  rect(-10, -10, 20, 20);
  // reset rotation and translation
  pop();
  // up 3 pixels
  y2 -= 0.5;
  // rotate 0.05 radians ~= 2.8 degrees per frame
  r += 0.05
  // if reach past the top a bunch
  if (y2 < -150) {
    y2 = 290;
  	}
  }
}
