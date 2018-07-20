$(document).ready(function() {
  $('.step1fwd').click(function(){
  	$('.addstep1').fadeOut(250);
  	$('.addstep2').fadeIn(1000);
  });
  $('.step2bck').click(function(){
	$('.addstep2').fadeOut(250);
  	$('.addstep1').fadeIn(1000);
  });
});