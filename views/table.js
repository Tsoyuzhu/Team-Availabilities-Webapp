$(document).ready(function() {
  $('td').click(function(){
  	$(this).toggleClass("trclicked");
	if ( $(this).children().attr("value") == 0) {
  		$(this).children().attr("value",1);
	} else {
		$(this).children().attr("value",0);
	}
  });
});