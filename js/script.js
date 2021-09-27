$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header').toggleClass('active');
	});
});

$(document).ready(function () {
	$('.detail__text').click(function (event) {
		$('.detail__body, .description, .description__body').toggleClass('active');
	});
});

function ibg() {
	let e = document.querySelectorAll(".ibg");
	for (var t = 0; t < e.length; t++)e[t].querySelector("img") && (e[t].style.backgroundImage = "url(" + e[t].querySelector("img").getAttribute("src") + ")")
}

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
			el: ".swiper-pagination",
			clickable: true,
		},
		scrollbar: {
			el: ".swiper-scrollbar"
		}
	})
}
));

$(document).ready(function () {
	$("#scroll").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});