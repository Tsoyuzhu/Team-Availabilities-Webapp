$(document).ready(function() {
  $('.choose-member').click(function(){
  	$(this).toggleClass("btn-clicked");
	if ( $(this).children().attr("value") == 0) {
  		$(this).children().attr("value",1);
	} else {
		$(this).children().attr("value",0);
	}
  });
});