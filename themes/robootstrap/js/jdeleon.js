(function($) {
$(document).ready(function() {

	// ** Front page effects **
	if ($('body').hasClass('path-frontpage')) {
		
		var navbarThreshold = 20;
		
		$(window).on('scroll', function(e) {
			
			if ($(window).scrollTop() > navbarThreshold)
				$('#navbar').toggleClass('navbar-solid-background', true);
			else
				$('#navbar').toggleClass('navbar-solid-background', false);
			
		});
		
		// Reveal effects
		window.sr = ScrollReveal();
		
		sr.reveal('#frontcover');
		sr.reveal('#frontcard', { delay: 300 });
		sr.reveal('#mystory-text');
		sr.reveal('.panel-1st', { origin: 'bottom', delay: 200 });
		sr.reveal('.panel-2nd', { origin: 'bottom', delay: 500 });
		sr.reveal('.panel-3rd', { origin: 'bottom', delay: 800 });
		sr.reveal('.btn-timeline');
	}

});
})(jQuery);