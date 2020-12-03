import rain from "../assets/audio/rain.mp3"

let c = document.getElementById("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
let ctx = c.getContext("2d");
let vRain = [];
let audio = new Audio(rain);
audio.loop = true;

class Rain {
  constructor(x, y, v, l,) { 
    this.x = x;
    this.y = y;
    this.v = v;
    this.l = l;
  }
  show() { 
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(this.x, this.y); 
    ctx.lineTo(this.x, this.y + this.l); 
    ctx.stroke();
  }

  fall() {
    this.y += this.v;
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
  setInterval(loop, 7);
}
setup();
audio.play();