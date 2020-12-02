/* eslint-disable */
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import GetSlime from './assets/audio/baseSlime.mp3';
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

let isMoving = false;
let x = 0;
let y = 0;
let audio = new Audio(GetSlime);
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
  audio.play();
});

canvas.addEventListener('mousemove', function (event) {
  if (isMoving == true) {
    requestAnimationFrame(animate);
    animate();
    mouse.x = event.x;
    mouse.y = event.y;
  }
});

window.addEventListener('mouseup', function(event){
  if (isMoving === true) {
    animate();
    audio.pause();
    x = 0;
    y = 0;
    isMoving = false;
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