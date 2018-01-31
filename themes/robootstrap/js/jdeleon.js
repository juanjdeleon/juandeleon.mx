(function($) {
$(document).ready(function() {

	// ** Front page **
	if ($('body').hasClass('path-frontpage')) {

		// Fade effect for navbar		
		var navbarThreshold = 20;
		
		$(window).on('scroll', function(e) {
			if ($(window).scrollTop() > navbarThreshold)
				$('#navbar').toggleClass('navbar-solid-background', true);
			else
				$('#navbar').toggleClass('navbar-solid-background', false);
			
		});
		
		// Read story button
		$('#readstory-link').on('click', function() {
			$('html,body').animate({
				scrollTop: $('#mystory-text').offset().top - 75
			});
		});
		
		// Reveal effects
		window.sr = ScrollReveal();
		
		sr.reveal('#frontcover');
		sr.reveal('#frontcard', { delay: 300, duration: 1000 });
		sr.reveal('#mystory-text');
		sr.reveal('.panel-1st', { origin: 'bottom', delay: 200, duration: 1000 });
		sr.reveal('.panel-2nd', { origin: 'bottom', delay: 500, duration: 1000 });
		sr.reveal('.panel-3rd', { origin: 'bottom', delay: 800, duration: 1000 });
		sr.reveal('.btn-timeline', { duration: 800 });
		sr.reveal('.view-frontpage');
	}
	
});
})(jQuery);