$(document).ready(function() {
  $('td.clickable').on("click", function(){
  	if ( $(this).hasClass("colourF") ) {
  		$(this).toggleClass("trclickedF");
  	}	
  	if ( $(this).hasClass("colourNF") ) {
  		$(this).toggleClass("trclickedNF");
  	}

	if ( $(this).children().attr("value") == 0) {
  		$(this).children().attr("value",1);
	} else {
		$(this).children().attr("value",0);
	}
  });
});