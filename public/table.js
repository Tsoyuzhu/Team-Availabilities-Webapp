$( document ).ready(function() {

  $('td.clickable').click(function(){

  	// Change it's colour. 
  	$(this).toggleClass('tdclicked');

  	// Change the value of the checkbox. 
  	if ($(this).children('.check-input').prop('checked') == true) {
  		$(this).children('.check-input').prop('checked', false);
  	} else {
		$(this).children('.check-input').prop('checked', true); 
	}
  });

});