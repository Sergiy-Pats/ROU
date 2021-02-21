jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .header__menu, body').toggleClass('active');
	})
	import('../js/header.js');
	/*

	if (window.innerWidth > 1180) {

		let scrollPos_1 = 0;
		window.addEventListener('scroll', function (e) {
			let anim = scrollY;
			console.log(anim);

			let lft = anim - 1050;
			//parseInt($('.item-intro-1').css('left'));
			console.log("left = " + lft);


			if (anim > scrollPos_1) {//scroll down

				if (anim >= 1050 && anim < 1550) {
					$('.item-intro-1').css('left', lft - 460 + "px");
				} else if (lft > 60) {
					$('.item-intro-1').css('position', "static");
				}

			}
			else if (anim < scrollPos_1) {//scroll up
				if (anim >= 1050 && anim < 1550) {
					$('.item-intro-1').css('left', lft - 460 + "px")
						;
				} else if (lft > 60) {
					$('.item-intro-1').css('position', "absolute");
				}
			}


			scrollPos_1 = anim;
		})
		
	}
	*/


	import('../js/slider.js');

	// top = растояние с верха до блока + верхний отступ  --- точка отчета
	// left = scrollY - top - 460

})

