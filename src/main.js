import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import nav from "./assets/audio/nav.mp3";
import landingMusic from "./assets/audio/landingMusic.mp3";

let audio = new Audio(nav);
let calm = new Audio(landingMusic);
calm.loop = true;

$("#mainPage").on("click", function () {
  window.location.href = "index.html";
});

$(document).on("mouseover", ".container .column", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

$("#mainPage").mouseenter(function () {
  audio.play();
});

$(".wrapper").mouseover(function () {
  audio.play();
});

$("body").mouseenter(function () {
  calm.play();
});
