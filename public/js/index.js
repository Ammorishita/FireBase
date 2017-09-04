let navigation = {
	init: function() {
		this.testing();
	},
	testing: function() {
		let misc = document.querySelector('.misc');
		let buttons = document.querySelectorAll('.button');
		misc.addEventListener('click', highlight);
		let chains = document.querySelectorAll('.chain');
		function highlight(e) {
			let current = e.target;
			if(current.classList.contains('button-active')) {

			} else {
				buttons.forEach( e => {
					e.classList.remove('button-active');
				})
				current.classList.add('button-active');
				chains.forEach( e => {
					e.classList.toggle('active');
				})
			}
		}
	}	
}
navigation.init();