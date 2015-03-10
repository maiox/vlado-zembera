(function($) {


//-----LIGHTBOX
var gallery = $('.gallery');
	
//Opacity na mouseeneter a mouse leave 


//------overlay

var overlay = $('<div/>', { id:'overlay'});
	overlay.appendTo('body').hide();

gallery.find('a').on('click', function(event) {
	
	overlay.show();
});

overlay.on('click', function(){
	overlay.hide();
});

//-------vytahujeme href

gallery.find('a').on('click', function(event) {

var href = $(this).attr('href'),
	image = $('<img>', { src: href, alt:'picturednfdfllsndlk'});

	overlay.html( image )
			.show();	

event.preventDefault();

});

//esc keyboard 

$(document).on('keyup', function () {
	//console.log( event.which);//vyhladavanie cisla znaku na klavesnici
	if (event.which == 27) overlay.hide();
});

})(jQuery);