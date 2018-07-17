$(document).ready(function() {
  // Cycle through the colours when clicked
  $('td.clickable').on("click", function(){
  	if ( $(this).hasClass("noColour") ) {
      $(this).toggleClass("noColour");
  		$(this).toggleClass("trclickedF");
  	}	else if ( $(this).hasClass("trclickedF") ) {
      $(this).toggleClass("trclickedF");
  		$(this).toggleClass("trclickedNF");
  	} else if ( $(this).hasClass("trclickedNF") ) {
      $(this).toggleClass("trclickedNF");
      $(this).toggleClass("noColour");
    }

    // Now alter the check boxes
  	if ( $(this).hasClass("noColour") ) {
    		$(this).children(".checkF").attr("value",0);
        $(this).children(".checkNF").attr("value",0);
  	} else if ( $(this).hasClass("trclickedF") ) {
        $(this).children(".checkF").attr("value",1);
        $(this).children(".checkNF").attr("value",1);
    } else if ( $(this).hasClass("trclickedNF") ) {
        $(this).children(".checkF").attr("value",0);
        $(this).children(".checkNF").attr("value",1);
    }
  });
});