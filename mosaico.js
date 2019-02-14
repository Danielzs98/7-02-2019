# 7-02-2019
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	for(var y = 5; y <  500; y = y + 10){
	for(var x = 5; x <  500; x = x + 10){
		ellipse(x,y,10,10);
	}
	}
}
