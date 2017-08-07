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
		this.styling();
		this.home();
	},
	home: function() {
		let redirect = document.querySelector('.redirect');
		redirect.addEventListener('click', function(e) {
			window.location.href = "index.html";
		});
	},
	styling: function() {
		let navElements = [];
		let resume = document.querySelector('.resume');
		let about = document.querySelector('.about');
		let projects = document.querySelector('.projects');
		let extra = document.querySelector('.extra');
		let skillItems = document.querySelectorAll('.skills')
		let educationItems = document.querySelectorAll('.education');
		let experienceItems = document.querySelectorAll('.experience');
		navElements.push(about, projects, extra);
		navElements.forEach(function(e) {
			e.addEventListener('click', navMenu);
		});
		resume.addEventListener('click', collapse);
		function navMenu(e) {
			let currentNav = e.target.className;
			navElements.forEach(function(a) {
				if(a.className != currentNav) {
					a.classList.remove('show');
					let contentName = '.' + a.innerHTML.toLowerCase();
					let content = document.querySelector(contentName);
					content.classList.remove('show-content');	
				} else if (a.className === currentNav) {
					a.classList.toggle('show');
					let contentName = '.' + a.innerHTML.toLowerCase();
					let content = document.querySelector(contentName);
					content.classList.toggle('show-content');					
				}
			})
		}
		function collapse(e) {
			if (e.target !== e.currentTarget) {
				let clickedItem = e.target.textContent;
				if(clickedItem === 'Education') {
					educationItems.forEach(function(e) {
						e.classList.toggle('show-subContent');
					});
				} else if (clickedItem === 'Relevant Experience') {
					experienceItems.forEach(function(e) {
						e.classList.toggle('show-subContent');
					});
				} else if (clickedItem === 'Technical Skills'){
					skillItems.forEach(function(e) {
						e.classList.toggle('show-subContent');
					});
				}
			}
			e.stopPropagation();
		}
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