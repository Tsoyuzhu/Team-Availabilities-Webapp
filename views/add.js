$(document).ready(function() {
  $('.step1fwd').click(function(){
  	$('.addstep1').hide();
  	$('.addstep2').show();
  });
   $('.step2fwd').click(function(){
  	$('.addstep2').hide();
  	$('.addstep3').show();
  });
 $('.step2bck').click(function(){
	$('.addstep1').show();
	$('.addstep2').hide();
  });
 $('.step3bck').click(function(){
	$('.addstep2').show();
	$('.addstep3').hide();
  });
});