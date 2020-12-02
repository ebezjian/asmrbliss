/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// import audio
import baseSlime from './assets/audio/baseSlime.mp3';
import baseSlime2 from './assets/audio/baseSlime2.mp3';
import slime1 from './assets/audio/slime1.mp3';
import slime2 from './assets/audio/slime2.mp3';
import slime3 from './assets/audio/slime3.mp3';
import slime4 from './assets/audio/slime4.mp3';
import slime5 from './assets/audio/slime5.mp3';
import slime6 from './assets/audio/slime6.mp3';
import slime7 from './assets/audio/slime7.mp3';

//nav bar
$('#mainPage').on( "click", function() {
  window.location.href ="index.html";
});

$('#aboutPage').on( "click", function() {
  window.location.href ="aboutUs.html";
});

$('#mukbangPage').on( "click", function() {
  window.location.href ="mukbang.html";
});

$('#mukbangPage').on( "click", function() {
  window.location.href ="mukbang.html";
});

$('#slimePages').on( "click", function() {
  window.location.href ="slime.html";
});

//main page
$(document).on('mouseover', '.container .column', function(){
  $(this).addClass('active').siblings().removeClass('active');
});

//slime stuff
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

let audio = new Audio(baseSlime);
let audio0 = new Audio(baseSlime2);
let audio1 = new Audio(slime1);
let audio2 = new Audio(slime2);
let audio3 = new Audio(slime3);
let audio4 = new Audio(slime4);
let audio5 = new Audio(slime5);
let audio6 = new Audio(slime6);
let audio7 = new Audio(slime7);
let audioArray = [audio1, audio2, audio3, audio4, audio5, audio5, audio7];

let isMoving = false;
let x = 0;
let y = 0;
console.log(x);
console.log(y);

const mouse = {
  x: null,
  y: null,
  radius: 50
}

canvas.addEventListener('mousedown', function(event){
  x = event.offsetX;
  y = event.offsetY;
  isMoving = true;
  audio0.play();
});

canvas.addEventListener('mousemove', function (event) {
  if (isMoving == true) {
    requestAnimationFrame(animate);
    animate();
    mouse.x = event.x;
    mouse.y = event.y;
    let rando = Math.floor(Math.random() * Math.floor(7));
    audioArray[rando].play();
  }
});

window.addEventListener('mouseup', function(event){
  if (isMoving === true) {
    animate();
    audio.pause();
    x = 0;
    y = 0;
    isMoving = false;
    audio0.pause();
  }
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 3;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = (Math.random() * 40) + 5;
  }
  
  draw() {
    ctx.fillStyle = 'teal';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    let dx = mouse.x - this.x; 
    let dy = mouse.y - this.y; 
    let distance = Math.sqrt(dx * dx + dy * dy); 
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;

    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.basey) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}
function init() {
  particleArray = [];
  for (let i = 0; i < 10000; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    particleArray.push(new Particle(x, y));
  }
}

init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
}
animate();

//Rain
let c = document.getElementById("canvas");
c.width = window.innerWidth
c.height = window.innerHeight
let ctxR = c.getContext("2d");
let vRain = [];

class Rain {
  constructor(x, y, l, v) { // coordinates, length, velocity.
    this.x = x;
    this.y = y;
    this.v = v;
    this.l = l;
  }
  show() { //Draw
    ctxR.strokeStyle = 'white';
    ctxR.beginPath();
    ctxR.moveTo(this.x, this.y); //start droplets
    ctxR.lineTo(this.x, this.y + this.l); //end of droplets
    ctxR.stroke();
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