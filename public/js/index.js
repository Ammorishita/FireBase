window.onload = function() {
	nav();
	function nav() {
		setTimeout(function() {
			$('#container > ul > li').css({
				'display': 'inline-block'
			});			
		}, 50);
	};
	$('.navigation').fadeIn(1500);
	$('svg').show();
	$('path, line, polyline').attr('id', 'first');
	function svg() {
		setTimeout(function() {
			$('#chair').attr('data', 'images/path.svg');
		},1500)
	}
	svg();
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
		this.navbar();
		this.home();
	},
	home: function() {
		let redirect = document.querySelector('.redirect');
		redirect.addEventListener('click', function(e) {
			window.location.href = "index.html";
		});
	},
	navbar: function() {
		let navElements = [];
		let about = document.querySelector('.about');
		let projects = document.querySelector('.projects');
		let extra = document.querySelector('.extra');
		navElements.push(about, projects, extra);
		navElements.forEach(function(e) {
			e.addEventListener('click', navigate);
		});
		function navigate(e) {
			let currentNav = e.target.className;
			/*if(e.className != currentNav) {
				let parent = document.getElementById('nav');
				let navEls = parent.children;
				navEls.forEach(function() {

				})
				parent.children[2].classList.toggle('show');
				setTimeout(function() {
					parent.children[1].classList.toggle('show');
				},100)
			}*/
			navElements.forEach(function(a) {
				if(a.className != currentNav) {
					a.classList.toggle('show');
					let parent = document.getElementById('nav');
				}
			})
		}
	}	
}
navigation.init();