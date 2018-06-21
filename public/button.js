$(document).ready(function() {
  $('.choose-member').click(function(){
  	$(this).toggleClass("btn-clicked");
	if ( $(this).children().attr("value") == "off") {
  		$(this).children().attr("value","on");
	} else {
		$(this).children().attr("value","off");
	}
  });
});