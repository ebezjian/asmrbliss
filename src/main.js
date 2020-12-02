import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//nav bar
$('#mainPage').on("click", function () {
  window.location.href = "index.html";
});

$('#aboutPage').on("click", function () {
  window.location.href = "aboutUs.html";
});

$('#mukbangPage').on("click", function () {
  window.location.href = "mukbang.html";
});

$('#mukbangPage').on("click", function () {
  window.location.href = "mukbang.html";
});

$('#slimePages').on("click", function () {
  window.location.href = "slime.html";
});

//main page
$(document).on('mouseover', '.container .column', function () {
  $(this).addClass('active').siblings().removeClass('active');
});