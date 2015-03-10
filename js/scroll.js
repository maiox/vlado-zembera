(function($) {

//SCROLOVANIE

var nav = $('nav'),
	navLinks = nav.find('a');

navLinks.on('click', function (event) {
	event.preventDefault();
	var id = this.hash;

	$('body').animate({ scrollTop: $(id).offset().top},1000,function() {
		window.location.hash = id;

	});

});

})(jQuery);