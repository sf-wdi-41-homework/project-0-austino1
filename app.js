$(document).ready(function() {
	
	console.log("Im on!")

// how to move the player
	var gas = function(keypressEvent){
		var keyCode = String.fromCharCode(keypressEvent.keyCode);
		var $lane = $('[data-key="' + keyCode + '"]');
    	var leftPosition = $lane.offset().left;
    	$lane.css({left: leftPosition + 6});
	}

	var race = function() {
    $(window).on('keypress', function(event) {
        gas(event);
     });
  };
  race();

});