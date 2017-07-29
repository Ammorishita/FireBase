var $, ko;
var ArtworkList = [
	{
		'title' : 'Four Elements',
		'img' : 'images/Artworks/4 Elements.jpg'
	},
	{
		'title' : 'Beach Cycling',
		'img' : 'images/Artworks/Beach Cycling.jpg'
	},
	{
		'title' : 'Sniper Soldier',
		'img' : 'images/Artworks/Sniper Soldier.jpg'
	},
	{
		'title' : 'Snow Archer',
		'img' : 'images/Artworks/Archer.png'
	},
];
var GraphicList = [
	{
		'title' : 'Wolf Head',
		'img' : 'images/Artworks/Wolf Head.png',
		'img2' : 'images/Artworks/Wolf Head Old.png',
		'height' : '300'
	},
	{
		'title' : 'Gladiator',
		'img' : 'images/Artworks/Gladiator.png',
		'img2' : 'images/Artworks/Gladiator old.png',
		'height' : '300'
	},
	{
		'title' : 'Football Field',
		'img' : 'images/Artworks/Football Field.png',
		'img2' : 'images/Artworks/Football Field Old.png',
		'height' : '300'
	},
	{
		'title' : 'DiamondDusters',
		'img' : 'images/Artworks/DiamondDusters.png',
		'img2' : 'images/Artworks/DiamondDustersOld.png',
		'height' : '300'
	},
	{
		'title' : 'Bison',
		'img' : 'images/Artworks/Bison.png',
		'img2' : 'images/Artworks/Bison Old.png',
		'height' : '300'
	},
	{
		'title' : 'Helmet Logo',
		'img' : 'images/Artworks/HelmetLogo.png',
		'img2' : 'images/Artworks/Helmet Logo Old.png',
		'height' : '300'
	},
	{
		'title' : 'Eagle Nh',
		'img' : 'images/Artworks/eaglenewNH.png',
		'img2' : 'images/Artworks/eagle old.png',
		'height' : '300'
	},
		{
		'title' : 'BulldogGray',
		'img' : 'images/Artworks/BulldogGray.png',
		'img2' : 'images/Artworks/BulldogGrayOld.png',
		'height' : '300'
	},
	{
		'title' : 'Bandits',
		'img' : 'images/Artworks/Bandits.png',
		'img2' : 'images/Artworks/BanditsOld.png',
		'height' : '300'
	},
	{
		'title' : 'Shark Logo',
		'img' : 'images/Artworks/Shark Logo.png',
		'img2' : 'images/Artworks/Shark Logo Old.png',
		'height' : '300'
	},
	{
		'title' : 'Silverback',
		'img' : 'images/Artworks/silverback.png',
		'img2' : 'images/Artworks/silverback old.png',
		'height' : '300'
	},
	{
		'title' : 'Silver Creek',
		'img' : 'images/Artworks/Silver Creek.png',
		'img2' : 'images/Artworks/Silver Creek old.png',
		'height' : '300'
	},
	{
		'title' : 'pirates',
		'img' : 'images/Artworks/pirates.png',
		'img2' : 'images/Artworks/piratesOld.png',
		'height' : '300'
	},
	{
		'title' : 'Cobra',
		'img' : 'images/Artworks/Cobra.png',
		'img2' : 'images/Artworks/Cobra Old.png',
		'height' : '300'
	},
	{
		'title' : 'Plainfield',
		'img' : 'images/Artworks/Plainfield.png',
		'img2' : 'images/Artworks/Plainfield Old.png',
		'height' : '300'
	},
];
var Warcraft = [
	{
		'title' : 'March of the Scourge - Destroy All Enemies',
		'src' : "https://www.youtube.com/embed/UrDzCpbrXgU?autoplay=1",
		'img' : "images/VideoImages/March of the Scourge.png"		
	},
	{
		'title' : 'The Hunter of Shadows - No Fountain',
		'src' : "https://www.youtube.com/embed/dqZ02Uing7Q?autoplay=1",
		'img' : "images/VideoImages/Hunter of Shadows.png"		
	},
	{
		'title' : 'The Culling - Destroy Undead Base',
		'src' : "https://www.youtube.com/embed/kJ0BKrvavXQ?autoplay=1",
		'img' : "images/VideoImages/The Culling.png"		
	},
	{
		'title' : 'Awakening of Stormrage - Destroy Undead Base',
		'src' : "https://www.youtube.com/embed/znOPi5-jMpA?autoplay=1",
		'img' : "images/VideoImages/Awakening of Stormrage.png"		
	},
	{
		'title' : 'Twilight of the Gods - No Starfall',
		'src' : "https://www.youtube.com/embed/7CEWjnEjP-Q?autoplay=1",
		'img' : "images/VideoImages/Twilight of the Gods.png"		
	},
	{
		'title' : 'Frostmourne - Kill Malganis Without Arthas',
		'src' : "https://www.youtube.com/embed/nOV7RU7qxJ8?autoplay=1",
		'img' : "images/VideoImages/Frostmourne.png"		
	},
	{
		'title' : 'Under the Burning Sky - Destroy All Forces',
		'src' : "https://www.youtube.com/embed/QKN20ZKVKss?autoplay=1",
		'img' : "images/VideoImages/Under the Burning Sky.png"		
	},
];
var WarcraftFrozen = [
	{
		'title' : 'Frost and Flame - Destroy All Forces',
		'src' : "https://www.youtube.com/embed/AOu2ITDM404?autoplay=1",
		'img' : "images/VideoImages/Frost and Flame.png"		
	},
	{
		'title' : 'Ruins of Dalaran - Destroy All Enemy Bases',
		'src' : "https://www.youtube.com/embed/OhrdAya3K6g?autoplay=1",
		'img' : "images/VideoImages/Ruins of Dalaran.png"		
	},
	{
		'title' : 'King Arthas - 0 Escaped Villagers',
		'src' : "https://www.youtube.com/embed/IrUnOZmYugA?autoplay=1",
		'img' : "images/VideoImages/King Arthas.png"		
	},
	{
		'title' : 'Dreadlord\'s Fall - Destroy Both Bases',
		'src' : "https://www.youtube.com/embed/ocNJ4NCKnmk?autoplay=1",
		'img' : "images/VideoImages/Dreadlord's Fall.png"		
	},
	{
		'title' : 'The Crossing - 100% Portal Life',
		'src' : "https://www.youtube.com/embed/4qBRyVeFsVk?autoplay=1",
		'img' : "images/VideoImages/The Crossing.png"	
	},
	{
		'title' : 'Balancing the Scales - No Base Units',
		'src' : "https://www.youtube.com/embed/ZkNp7wqsf3s?autoplay=1",
		'img' : "images/VideoImages/Balancing the Scales.png"		
	},
	{
		'title' : 'Balancing the Scales - No Tyande/Furion',
		'src' : "https://www.youtube.com/embed/loObfZucIKs?autoplay=1",
		'img' : "images/VideoImages/Balancing the Scales.png"		
	},
];
var Starcraft2 = [
	{
		'title' : 'Unsealing the Past - Starting Units Only',
		'src' : "https://www.youtube.com/embed/FeGTt_Z-XyU?autoplay=1",
		'img' : "images/VideoImages/Unsealing the Past.png"		
	},
	{
		'title' : 'Salvation - No Allies',
		'src' : "https://www.youtube.com/embed/B34bX69xuec?autoplay=1",
		'img' : "images/VideoImages/Salvation.png"		
	},
	{
		'title' : 'The Essence of Eternity - No Celestial Beam',
		'src' : "https://www.youtube.com/embed/xFMYo4ktOoM?autoplay=1",
		'img' : "images/VideoImages/The Essence of Eternity.png"		
	},
	{
		'title' : 'Dark Whispers - Destroy Zerg Bases',
		'src' : "https://www.youtube.com/embed/VHd_UTP1NBY?autoplay=1",
		'img' : "images/VideoImages/Dark Whispers.png"		
	},
	{
		'title' : 'Templar\'s Charge - Stationary Platform',
		'src' : "https://www.youtube.com/embed/-O0gcw5gDhE?autoplay=1",
		'img' : "images/VideoImages/Templar's Charge.png"		
	},
	{
		'title' : 'Temple of Unification - Destroy All Forces',
		'src' : "https://www.youtube.com/embed/WmVlD7RtqRA?autoplay=1",
		'img' : "images/VideoImages/Temple of Unification.png"		
	},
	{
		'title' : 'Harbinger of Oblivion - Destroy Enemy Bases',
		'src' : "https://www.youtube.com/embed/Uno5NxtZbSU?autoplay=1",
		'img' : "images/VideoImages/Harbinger of Oblivion.png"		
	},
	{
		'title' : 'Last Stand - 2.6 Billion',
		'src' : "https://www.youtube.com/embed/qH32pAGFsbY?autoplay=1",
		'img' : "images/VideoImages/Last Stand.png"		
	},
];
$(document).ready(function() {
	var load = {
		init: function() {
			this.archive();
			this.cache();
		},
		cache: function() {

		},
		archive: function() {
			$('.archive').click(function() {
				$('.archives').fadeToggle();
			});
		}
	}
	load.init();
});

var Videos = function(data) {
	this.title = (data.title);
	this.src = data.src;
	this.img = data.img;
};
var Artwork = function(data) {
	this.title = data.title;
	this.img = data.img;
	this.img2 = data.img2;
	this.height = data.height;
};

var ViewModel = function() {
	var self = this;
	self.youtube = ko.observable(true);
	self.comic = ko.observable(true);
	self.artworks = ko.observable(true);
	self.projects = ko.observable(false);
	self.illustration = ko.observable(false);
	self.vectors = ko.observable(true);
	self.ReignofChaos = ko.observableArray([]);
	self.FrozenThrone = ko.observableArray([]);
	self.Starcraft2 = ko.observableArray([]);
	self.Comics = ko.observableArray([]);
	self.Artworks = ko.observableArray([]);
	self.Graphics = ko.observableArray([]);
	let changed = true;
	self.changeImage = function() {	
		if (changed) {
			event.target.src = this.img2;
		}
		if (!changed) {
			event.target.src = this.img;
		}
		changed = !changed;
	};
	self.setVideo = function() {
		console.log(this.src);
		var vid = document.getElementById("mainVideo");
		vid.src = this.src;
		$('.youtubeContainer').animate({
		    scrollTop: 0
		}, 500);
	};
	self.thumbnail = function() {
		var timeout = null;
		$('.graphics').mousemove(function(e) {
			$('.thumbnail').css({
				'display' : 'none'
			})
				const x = e.pageX;
				const y = e.pageY;
				console.log( x,y)
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				$('.thumbnail').css({
					'top' : y,
					'left' : x,
					'display' : 'block'
				});					
			},1000);
		});
	};
	ArtworkList.forEach(function(data) {
		self.Artworks().push(new Artwork(data));
	});
	GraphicList.forEach(function(data) {
		self.Graphics().push(new Artwork(data));
	});
	Warcraft.forEach(function(data){
		self.ReignofChaos().push(new Videos(data));
	});
	WarcraftFrozen.forEach(function(data){
		self.FrozenThrone().push(new Videos(data));
	});
	Starcraft2.forEach(function(data){
		self.Starcraft2().push(new Videos(data));
	});

	var jQuery = {
		init: function() {
			this.cache();
			this.artworkNav();
			this.scrollTop();
			this.thumbnail();
			this.removeThumbnail();
		},
		cache: function() {

		},
		artworkNav: function() {
			$('.illustrationLink').click(function() {
				self.illustration(true);
				self.vectors(false);
				$('#artworksSubContainer').animate({
				    scrollTop: 0
				}, 0);
			});
			$('.graphicsLink').click(function() {
				self.illustration(false);
				self.vectors(true);
				$('#graphicsSubContainer').animate({
				    scrollTop: 0
				}, 0);
			});
		},
		thumbnail: function() {
			$('.show').click(function() {
				$('.thumbnail').remove();
			})
		},
		loadingImage: function() {
			$('.graphic').on('load', function() {

			})
		},
		removeThumbnail: function() {
			$('.adobe').mouseover(function() {
						$('.thumbnail').css({
				'display' : 'none'
			});
			console.log('outside')
			})
		},
		scrollTop: function() {
			$("#graphicsSubContainer, #artworksSubContainer").scroll(function() {
			   var offset = ($("#graphicsSubContainer").scrollTop());
			   var offset2 = ($("#artworksSubContainer").scrollTop());  
			   if(offset || offset2 > 0) {
			   		$('.topGraphics').fadeIn();
			   		$('.topArtworks').fadeIn();
			   } else {
			   		$('.topGraphics').fadeOut();
			   		$('.topArtworks').fadeOut();
			   }
			   $('.topGraphics').click(function() {
			   		$("#graphicsSubContainer").scrollTop(0);
			   });
			   $('.topArtworks').click(function() {
			   		$("#artworksSubContainer").scrollTop(0);
			   });
			});
		}
	}
	jQuery.init();

};

$(function() {
	ko.applyBindings(new ViewModel());
});