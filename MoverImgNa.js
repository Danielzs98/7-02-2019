var img;
var n;



function preload() {
  img = loadImage('naruto.png');

}


function setup() {
  n = new naruto();
  createCanvas(400, 400);


}



function draw() {
  background(140,0,0);
  n.mostrar();
  if (keyIsPressed && keyCode == RIGHT_ARROW) {
    n.derecha();
  }
    if (keyIsPressed && keyCode == LEFT_ARROW) {
   n.izquierda();
    }
      if (keyIsPressed && keyCode == UP_ARROW) {
    n.arriba();
      }
        if (keyIsPressed && keyCode == DOWN_ARROW) {
    n.abajo();
  
  }

}

class naruto {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;

  }

  mostrar(){
    imageMode(CENTER);
    image(img, this.x, this.y, 200, 200);


  }


  derecha() {
    this.x++;
  }

  izquierda() {
    this.x--;
  }

  abajo() {
    this.y++;
  }

  arriba() {
    this.y--;
  }

}
