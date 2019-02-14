# 14-02-2019
function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	rectA();
	//punto1();
	//punto2();
	//punto3();
	//punto4();
	//punto5();
	punto6();

}

function rectA() {
	fill(255);
	rect(20, 20, 360, 360, 10);

}

function punto1() {
	fill(0);
	ellipse(200, 200, 50, 50);

}

function punto2() {
	fill(0);
	ellipse(100, 100, 50, 50);
	ellipse(300, 300, 50, 50);
}

function punto3() {
	punto1();
	punto2();
}

function punto4() {
	punto2();
	fill(0);
	ellipse(300, 100, 50, 50);
	ellipse(100, 300, 50, 50);

}

function punto5() {
	punto4();
	punto1();

}

function punto6() {
	punto4();
	fill(0);
	ellipse(100, 200, 50, 50);
	ellipse(300, 200, 50, 50);
}
