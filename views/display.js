$(document).ready(function() {
  $('.step1fwd').click(function(){
  	$('.displaytableF').hide();
  	$('.displaytableNF').show();
  });
   $('.step2bck').click(function(){
  	$('.displaytableNF').hide();
  	$('.displaytableF').show();
  });
});