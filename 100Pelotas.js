var p1;
var p2;
var ball = [];

function setup() {
	createCanvas(400, 400);
	//p1 = new Ball();
	//p2 = new Ball();
	for (var i = 0; i < 100; i++) {
		ball[i] = new Pelota();
	}


}

function draw() {
	background(220);
	for (var i = 0; i < ball.length; i++) {
		

		ball[i].mostrar();
		ball[i].moverx();
		ball[i].movery();
	
		

		if (ball[i].salirx()) {
			ball[i].botarx();
		}


		if (ball[i].saliry()) {
			ball[i].botary();
		}

	}
}
class Pelota {
	constructor() {
		this.x = random(25, width - 25);
		this.y = random(25, height - 25);
		this.tam = 50;
		this.velx = random(1,10);
		this.vely = random(1,10);
		this.r = 0;
		this.g = 0;
		this.b = 0;
	}
	mostrar() {
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.tam, this.tam);
	}
	moverx() {
		this.x = this.x + this.velx;
	}
	salirx() {
		var res;
		if (this.x < 25 || this.x > 375) {
			res = true;
		} else {
			res = false;
		}
		return res;
	}
	botarx() {
		this.r = random(0, 255);
		this.g = random(0, 255);
		this.b = random(0, 255);
		this.velx = this.velx * -1
	}

	movery() {
		this.y = this.y + this.vely;
	}
	saliry() {
		var res;
		if (this.y < 25 || this.y > 375) {
			res = true;
		} 
		else {
			res = false;
		}
		return res;
	}
	botary() {
		this.r = random(0, 255);
		this.g = random(0, 255);
		this.b = random(0, 255);
		this.vely = this.vely * -1
	}
}
