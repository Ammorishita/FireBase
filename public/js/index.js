window.onload = function() {

};
$(document).click(function(e) {
	const x = e.pageX;
	const y = e.pageY;
	const myDiv = '<div class="click"></div>';
	$('body').append(myDiv);
	$('.click').css({
		'left' : x - 5,
		'top' : y - 5,
	});
	$('.click').addClass('active')
	setTimeout(function() {
		$('.click').css({
			'-webkit-transform' : 'scale(40)',
			'transform' : 'scale(40)'
		});
	},1)
	setTimeout(function() {
		$('.click').removeClass('active');
		$('body .click:last').remove();
	},150);
});
let navigation = {
	init: function() {
		this.styling();
		this.home();
		this.mobile();
	},
	home: function() {
		let redirect = document.querySelector('.redirect');
		redirect.addEventListener('click', function(e) {
			window.location.href = "index.html";
		});
	},
	mobile: function() {
		let popup = document.querySelector('.pop-up');
		let something = [1,2,2];
		something.forEach(v => {
			console.log(v);
		})
	},
	styling: function() {
		function skillLevel() {
			let level = document.querySelectorAll('.level');
			level.forEach(function(e) {
				e.style.width = e.dataset.level;
			})
		}
		skillLevel();
	}	
}
navigation.init();