# 7-02-2019
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
	
	for(var x = 5; x <  500; x = x + 10){
		ellipse(x,5,10,10);
	}
	
}
