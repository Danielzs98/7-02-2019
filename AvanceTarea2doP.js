var b;


function setup() {
  createCanvas(400, 400);

  b = new bowser();
  frameRate(8);
}




function draw() {
  background(220);
  b.mostrar();
  //if (keyIsPressed && keyCode == RIGHT_ARROW) {
    //b.derecha();
  //}
    
  if (keyIsPressed && keyCode == LEFT_ARROW){
      b.izquierda();
  }
}
-----------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.dom.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="sketch.js"></script>
    <script src="bowser.js"></script>
  </body>
</html>
--------------------------------------------------------------------------------------------
class bowser {

  constructor() {

    this.x = width / 2;
    this.y = height / 2;
    this.imgsD = [];
    this.imgsI = [];
    this.frame = 0;
    //for (var i = 0; i < 3; i++) {

    this.imgsD[0] = loadImage("bowserD/0.gif");
    this.imgsD[1] = loadImage("bowserD/1.gif");
    this.imgsD[2] = loadImage("bowserD/2.gif");
    this.imgsD[3] = loadImage("bowserD/3.gif");
    this.imgsD[4] = loadImage("bowserD/4.gif");
    this.imgsD[5] = loadImage("bowserD/5.gif");
    this.imgsD[6] = loadImage("bowserD/6.gif");
    this.imgsD[7] = loadImage("bowserD/7.gif");


    this.imgsI[0] = loadImage("bowserI/0.gif");
    this.imgsI[1] = loadImage("bowserI/1.gif");
    this.imgsI[2] = loadImage("bowserI/2.gif");
    this.imgsI[3] = loadImage("bowserI/3.gif");
    this.imgsI[4] = loadImage("bowserI/4.gif");
    this.imgsI[5] = loadImage("bowserI/5.gif");
    this.imgsI[6] = loadImage("bowserI/6.gif");
    this.imgsI[7] = loadImage("bowserI/7.gif");
  }


  //}

  mostrar() {
    imageMode(CENTER);
    image(this.imgsD[this.frame], this.x, this.y);
    image(this.imgsI[this.frame], this.x, this.y);


  }

  derecha() {
    this.frame++;
    this.x = this.x + 10;
    if (this.frame > 7) {
      this.frame = 0;
    }
  }

  izquierda() {

    this.frame++;
    this.x = this.x - 10;
    if (this.frame > 7) {
      this.frame = 0;
    }
  }

}
