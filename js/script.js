(function($) {

	JS.Responsive.addHorizontalSizePoint( 'large',  1280 );
	JS.Responsive.addHorizontalSizePoint( 'medium',  960 );
	JS.Responsive.addHorizontalSizePoint( 'small',   480 );
	JS.Responsive.addHorizontalSizePoint( 'x-small', 320 );

//----------FOTKA--------

var info = $('.info'),
	pic = $('.profile_pic');

info.hide();
	pic.hover( function () {
		$(info).show(); 
	}, function () {
			$(info).hide();

});
		

//-------CHANGE GALLERIES

var galleries = $('.galleries');
	
	galleries.hide();

var selected = $('.menu').find('.highlight'),
	selectedGallery;

	
function showGallery (selected) {
	if ( selected.length ) {
		var id = selected.find('a').attr('href');
			selectedGallery = $(id);
		}

		var newGallery = selectedGallery.length ? selectedGallery : galleries.eq(0);

		galleries.not( newGallery).hide();
			newGallery.fadeIn();


	}

	showGallery(selected);

	$('.menu a').on('click', function(event){
	
	var li = $(this).parent();

	
	li.addClass('.selected')
	  .siblings().removeClass('.selected');

	   showGallery(li);

		event.preventDefault();
});
	



	



	

})(jQuery);
