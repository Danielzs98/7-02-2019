# 14-02-2019
var x = 200;
var velx = 18;
var y = 200;
var vely = 1;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	mostrar();
	moverX();
	botarX();
	moverY();
	botarY();
}

function mostrar() {
	ellipse(x, y, 50, 50);

}

function moverX() {
	x = x + velx;

}

function botarX() {
	if (x < 25) {
		velx = velx * -1;
	}
	if (x > 375) {
		velx = velx * -1;
	}
}

	function moverY() {
		y = y + vely;

	}

	function botarY(){


		if (y < 25) {
			vely = vely * -1;
		}
		if (y > 375) {
			vely = vely * -1;
		}
	}
