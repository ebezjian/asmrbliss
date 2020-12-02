let c = document.getElementById("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
let ctx = c.getContext("2d");
let vRain = [];

class Rain {
  constructor(x, y, v, l,) { // coordinates, length, velocity.
    this.x = x;
    this.y = y;
    this.v = v;
    this.l = l;
  }
  show() { //Draw
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y); //start droplets
    ctx.lineTo(this.x, this.y + this.l); //end of droplets
    ctx.stroke();
  }

  // gravity
  fall() {
    this.y += this.v;

    //recreate if droplet hits the ground
    if (this.y > c.height) {
      this.x = Math.floor(Math.random() * c.width) + 5;
      this.y = Math.floor(Math.random() * 100) - 100;
      this.l = Math.floor(Math.random() * 30) + 1;
      this.v = Math.floor(Math.random() * 12) + 4;
    }
  }

}
function loop() {

  ctx.clearRect(0, 0, c.width, c.height);

  for (var i = 0; i < vRain.length; i++) {
    vRain[i].show();
    vRain[i].fall();
  }
}
function setup() {

  for (var i = 0; i < 60; i++) {
    vRain[i] = new Rain(
      Math.floor(Math.random() * c.width) + 5,
      Math.floor(Math.random() * 100) - 100,
      Math.floor(Math.random() * 30) + 1,
      Math.floor(Math.random() * 12) + 4,
    );
  }
  setInterval(loop, 10);
}
setup();