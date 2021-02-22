
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
		slidesToShow: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 6200,
		pauseOnHover: true,
		pauseOnFocus: true,
		pauseOnDotHover: false,
		speed: 800,
		arrows: false,
		mobileFirst: false,

	});

}
//динамическое вкл\выкл слайдера
$(window).on('resize', function () {
	//console.log('width = ' + window.innerWidth);

	if (window.innerWidth <= 768) {

		$('.slider-2').slick({
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 6200,
			pauseOnHover: true,
			pauseOnFocus: true,
			pauseOnDotHover: false,
			speed: 800,
			arrows: false,
			mobileFirst: false,
		});

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

	} else if (window.innerWidth > 768) {
		$('.slider').slick('unslick');
		$('.slider-2').slick('unslick');

	}
})

