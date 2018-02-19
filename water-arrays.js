var x = 230;
var y = 220;
var b = y; 

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
	for (var i = 0; i <100; i = i + 10) {
		b = y + i;
		c = y + (3*i);
	}
}
  
function draw() {
  background(0);
  noStroke();
	
  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  ellipse(x, y, 10);
	ellipse(x, b, 10);
	ellipse(x, c, 10);
  
  // down 3 pixels each frame, but maybe should be accelerating?
  function addition() {
	y = y + (Math.floor(Math.random() * 2) + 1 )
	c = b + (Math.floor(Math.random() * 2) + 1 )
	}
	b = b + 3 + (Math.floor(Math.random() * 2) + 1 )
	
	setInterval(addition, 3000)
  
  // if invisible for a full “height” amount…
  if (y > height*2, b > height*2, c > height*2) {
    // reset
    y = 220;
		b = 220;
		c = 220;
	}
	
}
