(function($) {
$(document).ready(function() {

	// Enable this effect only at frontpage
	if ($('body').hasClass('path-frontpage')) {
		
		var navbarThreshold = 20;
		
		$(window).on('scroll', function(e) {
			
			if ($(window).scrollTop() > navbarThreshold)
				$('#navbar').toggleClass('navbar-solid-background', true);
			else
				$('#navbar').toggleClass('navbar-solid-background', false);
			
		});
		
	}

});
})(jQuery);