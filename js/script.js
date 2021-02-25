jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .header__menu, body').toggleClass('active');
	})
	import('../js/header.js');

	import('../js/slider.js');
	let scrollPos_1 = 0;
	window.addEventListener('scroll', function (e) {
		//console.log(window.innerWidth);

		let anim = scrollY;
		//console.log('anim = ' + anim);
		let top = $('.intro').offset().top;

		//console.log('top = ' + top);


		let lft = anim - top - 500 + 345;
		//console.log("left = " + lft);



		if (anim + -150 < top && window.innerWidth > 1180) {
			$('.item-intro-1').css({
				'transition': 'all, 0.1s',
				'transform': 'translateX(' + lft + 'px)'
			});

			$('.item-intro-3').css({
				"transform": 'translateX(' + -lft + 'px)',
				'transition': 'all, 0.1s',
			});
		}
		else if (lft => 0) {
			$('.item-intro-1').css({
				'transform': 'translateX(0)',

				'transition': 'all, 0.1s',
			});

			$('.item-intro-3').css({
				'transform': 'translateX(0)',

				'transition': 'all, 0.1s',
			});
		}


		scrollPos_1 = anim;
	})

	//-------------------------------------------------------------
	//отмена стандартного действия при клике на кнопку (а href)
	$('a').on('click', function (event) {
		console.log('Мы отменили действие');

		event.preventDefault();

	}, false);
	//-------------------------------



})

