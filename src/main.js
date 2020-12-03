import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import nav from './assets/audio/nav.mp3'

let audio = new Audio(nav);

$('#mainPage').on("click", function () {
  window.location.href = "index.html";
});

$('#mainPage').mouseenter(function() { 
  audio.play(); 
});

$('.wrapper').mouseover(function() { 
  audio.play(); 
});

$(document).on('mouseover', '.container .column', function () {
  $(this).addClass('active').siblings().removeClass('active');
});