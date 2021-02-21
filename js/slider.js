
// При старте ссайта с разширением меньше 768 слайдер активен
if (window.innerWidth <= 768) {
	$('.slider').slick({
		slidesToShow: 1,
		infinite: false,
		dots: true,
		arrows: false,
		mobileFirst: true,
	});
}
//динамическое вкл\выкл слайдера
$(window).on('resize', function () {
	//console.log('width = ' + window.innerWidth);

	if (this.innerWidth <= 768) {
		$('.slider').slick({
			slidesToShow: 1,
			infinite: false,
			arrows: false,
			dots: true,
			mobileFirst: true,
		});
	} else if (this.innerWidth > 768) {
		$('.slider').slick('unslick');
	}
})

