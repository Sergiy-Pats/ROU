jQuery('document').ready(function () {
	$('.header__burger').on('click', function (event) {
		$('.header__burger,.header, .header__menu, body').toggleClass('active');
	})

	$('.header').addClass('fix')

	let scrollPos = 0;
	window.addEventListener('scroll', function () {
		let y = scrollY;
		//console.log('y = ' + y);
		let cnt_w = $('.hero').innerHeight();
		//console.log(cnt_w);
		/*
				if (y >= cnt_w) {
					$('.header').addClass('fix')
				}
				else if (y < cnt_w) {
					$('.header').removeClass('fix')
				}*/
		let up = $(window).scrollTop();
		//console.log('up = ' + up);
		//console.log('scrollPos = ' + scrollPos);
		//опа
		if (up <= scrollPos) {
			$('.header').addClass('fix')
		} else if (up => scrollPos) {
			$('.header').removeClass('fix')
		}
		scrollPos = up;
		if (y >= 2) {
			let headerHeight = $('.header').css({ 'height': '50px', 'background-color': '#ebeaf9' });
		} else if (y < 2 && window.innerWidth > 840) {
			let headerHeight = $('.header').css({ 'height': '180px', 'background-color': '#ebeaf900' });
		}
	});


	onmousemove = function (e) {
		console.log("mouse location:", e.clientX, e.clientY)
		if (e.clientY <= 30) {
			$('.header').addClass('fix')
		}
	}


})

