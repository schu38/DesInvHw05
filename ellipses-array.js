var x1 = [];
var y1 = [];
var d1 = [];

var x2 = 300;
var y2 = 200;
var d2 = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (i = 0; i < 50; i = i + 1) {
    x1[i] = random(0, width);
    y1[i] = random(0, height);
    d1[i] = random (5,20);
  }
    
  // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d1[i] = random(100, 400);
  }
  
  // 2% of the time…
  if (random() < 0.02) {
    // random diameter between 10 and 400
    d2[i] = Math.floor(random(300, 400));
  }
}
  
function draw() {
  background(255);
  noStroke();

  // draw two ellipses
  for (i = 0; i < 100; i = i + 1) {
    
  fill(x1[i], y1[i], x1[i]);
  ellipse(x1[i], y1[i], d1[i]);
  }
  
  fill(y2[i], x2[i], 100);
  ellipse(x2[i], y2[i], d2[i]);

}
