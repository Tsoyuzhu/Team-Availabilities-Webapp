//$(document).ready(function() {
  $('td').click(function(){
  	$(this).toggleClass("trclicked");
	if ( $(this).children().attr("value") == "off") {
  		$(this).children().attr("value","on");
	} else {
		$(this).children().attr("value","off");
	}
  });
//});