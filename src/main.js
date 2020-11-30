//user logic
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";


$(document).on('mouseover', '.container .column', function(){
  $(this).addClass('active').siblings().removeClass('active');
});