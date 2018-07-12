$(document).ready(function() {
  $('.step1fwd').click(function(){
  	$('.editmemstep1').hide();
  	$('.editmemstep2').show();
  });
   $('.step2bck').click(function(){
  	$('.editmemstep2').hide();
  	$('.editmemstep1').show();
  });
});