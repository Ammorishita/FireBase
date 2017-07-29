window.onload = function() {
	$('.bio').slideDown();
	$('.bio').css({
		'display':'flex'
	});
	$('header, footer').animate({
		'opacity': '1'
	},500)
	$('.loader').css({
		'display':'none'
	});
	$('.loaderContainer').fadeOut();
};
var about = ['.bio','.resume','.contact'];

var chartList = [
	{
		'title' : 'The Normal Routine',
		'src' : 'images/Piechart.svg',
		'height' : '300',
		'width' : '300'
	},
	{
		'title' : 'Driving to Work',
		'src' : 'images/Driving.svg',
		'height' : '300',
		'width' : '300'
	},
	{
		'title' : 'Buying Food',
		'src' : 'images/Food.svg',
		'height' : '300',
		'width' : '300'
	},
	{
		'title' : 'Home Energy Use',
		'src' : 'images/Energy.svg',
		'height' : '300',
		'width' : '400'
	},
];

var Chart = function(data) {
	this.title = data.title;
	this.src = data.src;
	this.height = data.height;
	this.width = data.width;
};

var ViewModel = function() {
	var self = this;
	self.Charts = ko.observableArray([]);
	chartList.forEach(function(data) {
		self.Charts().push(new Chart(data));
	});
	console.log(self.Charts())

	var links = {
		init: function() {
			this.resume();
			this.bio();
			this.contact();
		},
		resume: function() {
			$('.resumelink').click(function() {
				$('.bio').slideUp();	
				$('.contact').slideUp();
				setTimeout(function() {
					$('.resume').slideDown();
				},250)
				$('.biolink').css('pointer-events','none')
				$('.contactlink').css('pointer-events','none')
				setTimeout(function() {
					$('.biolink').css('pointer-events','auto')
					$('.contactlink').css('pointer-events','auto')
				},500);
			});
		},
		bio: function() {
			$('.biolink').click(function() {
				$('.resume').slideUp();
				$('.contact').slideUp();
				setTimeout(function() {
					$('.bio').slideDown();
				},250)
				$('.resumelink').css('pointer-events','none')
				$('.contactlink').css('pointer-events','none')
				setTimeout(function() {
					$('.resumelink').css('pointer-events','auto')
					$('.contactlink').css('pointer-events','auto')
				},500);
			});
		},
		contact: function() {
			$('.contactlink').click(function() {
				$('.bio').slideUp();
				$('.resume').slideUp();
				setTimeout(function() {
					$('.contact').slideDown();
				},250)
				$('.biolink').css('pointer-events','none')
				$('.resumelink').css('pointer-events','none')
				setTimeout(function() {
					$('.resumelink').css('pointer-events','auto')
					$('.biolink').css('pointer-events','auto')
				},500);
			});
		}
	}
	links.init();
};

$(function() {
	ko.applyBindings(new ViewModel());
});

