(function($) {
$(document).ready(function() {

	// Enable this effect only at frontpage
	if ($('body').hasClass('path-frontpage')) {
		
		var bannerHeight = $('#frontcover').height();
		
		$(window).on('scroll', function(e) {
			
			if ($(window).scrollTop() > bannerHeight)
				$('#navbar').toggleClass('navbar-solid-background', true);
			else
				$('#navbar').toggleClass('navbar-solid-background', false);
			
		});
		
	}

});
})(jQuery);