
// При старте ссайта с разширением меньше 768 слайдер активен
if (window.innerWidth <= 768) {
	$('.slider').slick({
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6200,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotHover: false,
		speed: 800,
		dots: true,
		arrows: false,
		mobileFirst: true,
	});
	$('.slider-2').slick({
		slidesToShow: 2,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6200,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotHover: false,
		speed: 800,
		dots: false,
		arrows: false,
		mobileFirst: false,
		//centerMode: true,
		responsive: [{
			breakpoint: 540,
			settings: {
				slidesToShow: 1,
			}
		}],

	});
}
//динамическое вкл\выкл слайдера
$(window).on('resize', function () {
	//console.log('width = ' + window.innerWidth);

	if (this.innerWidth <= 768) {
		$('.slider').slick({
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3200,
			pauseOnHover: true,
			pauseOnFocus: true,
			pauseOnDotHover: false,
			speed: 800,
			arrows: false,
			dots: true,
			mobileFirst: true,
		});
		$('.slider-2').slick({
			slidesToShow: 2,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 3200,
			pauseOnHover: true,
			pauseOnFocus: true,
			pauseOnDotHover: false,
			speed: 800,
			arrows: false,
			dots: false,
			mobileFirst: false,
			//centerMode: true,

			responsive: [{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
				}
			}],

		});
	} else if (this.innerWidth > 768) {
		$('.slider').slick('unslick');
		$('.slider-2').slick('unslick');
	}
})

