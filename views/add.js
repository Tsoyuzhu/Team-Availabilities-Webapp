$(document).ready(function() {
  $('.step1fwd').click(function(){
  	$('.addstep1').hide();
  	$('.addstep2').show();
  });
  $('.step2bck').click(function(){
  	$('.addstep1').show();
  	$('.addstep2').hide();
  });
});