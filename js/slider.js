
// При старте ссайта с разширением меньше 768 слайдер активен
//if (window.innerWidth <= 768) {
function slider_1() {
	$('.slider').slick({
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
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick'
			},
		]
	});
}
function slider_2() {

	$('.slider-2').slick({
		infinite: true,
		autoplay: true,
		slidesToShow: 2,
		autoplaySpeed: 6200,
		speed: 800,
		arrows: false,
		mobileFirst: false,
		pauseOnFocus: true,
		pauseOnHover: true,
		responsive: [

			{
				breakpoint: 10000,
				settings: 'unslick'
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
				}
			},
		]

	});
}
if ($(window).width() < 767) {
	slider_1();
	slider_2();
}
//}
//динамическое вкл\выкл слайдера

$(window).on('resize', function () {
	//console.log('width = ' + window.innerWidth);
	let $windowWidth = $('windwow').width();
	if ($windowWidth <= 768 && $('.slider-2').hasClass('slick-initialized') && $('.slider').hasClass('slick-initialized')) {
	}
	else {
		slider_1();
		slider_2();
	}
})
