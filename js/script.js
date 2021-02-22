jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .header__menu, body').toggleClass('active');
	})
	import('../js/header.js');



	//if (window.innerWidth > 1180) {

	let scrollPos_1 = 0;
	window.addEventListener('scroll', function (e) {
		console.log(window.innerWidth);

		let anim = scrollY;
		console.log('anim = ' + anim);
		let top = $('.intro').offset().top;

		console.log('top = ' + top);


		let lft = anim - top - 500 + 345;
		//parseInt($('.item-intro-1').css('left'));
		console.log("left = " + lft);


		//if (anim > scrollPos_1) {//scroll down

		if (/*anim >= top - 500 && */anim + -150 < top && window.innerWidth > 1180) {
			$('.item-intro-1').css("transform", 'translateX(' + lft + 'px)');

			$('.item-intro-3').css("transform", 'translateX(' + -lft + 'px)');
		}
		else if (lft => 0) {
			$('.item-intro-1').css('transform', 'translateX(0)');

			$('.item-intro-3').css("transform", 'translateX(0)');
		}


		//}
		/*
		else if (anim < scrollPos_1) {//scroll up
			if (anim >= 1050 && anim < 1550) {
				$('.item-intro-1').css('left', lft - 460 + "px")
					;
			}
		}*/


		scrollPos_1 = anim;
	})

	//}




	import('../js/slider.js');

	// top = растояние с верха до блока + верхний отступ  --- точка отчета
	// left = scrollY - top - 500

})

