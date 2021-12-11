// preloader
$(window).on('load', function () {
	$('body').addClass('loaded_hiding');
	window.setTimeout(function () {
		$('body').addClass('loaded');
		$('body').removeClass('loaded_hiding');
	}, 500);
});
// header burger	
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu, .header').toggleClass('active');
	});
});
// review
$(document).ready(function () {
	new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: !0,
		initialSlide: 0,
		speed: 1500,
		slidesPerView: 1,
		spaceBetween: 100,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
		},
		keyboard: {
			enabled: !0,
			onlyInViewport: !1
		},
		navigation: {
			nextEl: ".swiper-next",
			prevEl: ".swiper-prev"
		}
	})
});
// scroll
$(document).ready(function () {
	$("#scroll").on("click", "a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});
// ibg
function ibg() {
	let e = document.querySelectorAll(".ibg");
	for (var t = 0; t < e.length; t++)e[t].querySelector("img") && (e[t].style.backgroundImage = "url(" + e[t].querySelector("img").getAttribute("src") + ")")
}
// room swiper
$(document).ready(function () {
	new Swiper(".swiper-container1", {
		direction: "horizontal",
		loop: !0,
		initialSlide: 0,
		speed: 1500,
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		keyboard: {
			enabled: !0,
			onlyInViewport: !1
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	})
});
// accordion
$(document).ready(function () {
	let accordion = (function (element) {
		let _getItem = function (elements, className) {
		  let element = undefined;
		  elements.forEach(function (item) {
			if (item.classList.contains(className)) {
			  element = item;
			}
		  });
		  return element;
		};
		return function () {
		  let _mainElement = {},
			_items = {}, 
			_contents = {};
		  let _actionClick = function (e) {
			if (!e.target.classList.contains('accordion__header')) { 
			  return;
			}
			e.preventDefault();
			let header = e.target,
			  item = header.parentElement,
			  itemActive = _getItem(_items, 'show');
			if (itemActive === undefined) {
			  item.classList.add('show');
			} else {
			  itemActive.classList.remove('show');
			  if (itemActive !== item) {
				item.classList.add('show');
			  }
			}
		  },
			_setupListeners = function () {
			  _mainElement.addEventListener('click', _actionClick);
			};
		  return {
			init: function (element) {
			  _mainElement = (typeof element === 'string' ? document.querySelector(element) : element);
			  _items = _mainElement.querySelectorAll('.accordion__item');
			  _setupListeners();
			}
		  }
  
		}
	  })();
	  let accordion1 = accordion();
	  accordion1.init('#accordion');
	  let accordion2 = accordion();
	  accordion2.init('#accordion2');
	  let accordion3 = accordion();
	  accordion3.init('#accordion3');
});