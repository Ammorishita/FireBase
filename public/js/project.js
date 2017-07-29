window.onload = function(){
	$('.portfolio').fadeIn(1000);
	$('.portfolio').css({
		'display':'flex'
	});
	$('header, footer, .filter').animate({
		'opacity': '1'
	},500)
};
