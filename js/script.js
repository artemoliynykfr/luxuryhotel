$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
	});
});

$(document).ready((function () {
	new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: !0,
		initialSlide: 0,
		speed: 1500,
		slidesPerView: 1,
		spaceBetween: 0,
		breakpoints: {
			999: {
				slidesPerView: 1,
				spaceBetween: 0
			}
		},
		keyboard: {
			enabled: !0,
			onlyInViewport: !1
		},
		navigation: {
			nextEl: ".swiper-next",
			prevEl: ".swiper-prev"
		},
		pagination: {
			el: ".swiper-pagination"
		},
		scrollbar: {
			el: ".swiper-scrollbar"
		}
	})
}
)),
	$(document).ready((function () {
		new Swiper(".swiper-rent-container", {
			direction: "horizontal",
			loop: !0,
			initialSlide: 0,
			speed: 1500,
			slidesPerView: 1,
			spaceBetween: 0,
			breakpoints: {
				1999: {
					slidesPerView: 1,
					spaceBetween: 0
				},
				999: {
					slidesPerView: 1,
					spaceBetween: 0
				}
			},
			keyboard: {
				enabled: !0,
				onlyInViewport: !1
			},
			navigation: {
				nextEl: ".swiper-rent-next",
				prevEl: ".swiper-rent-prev"
			}
		})
	}
));