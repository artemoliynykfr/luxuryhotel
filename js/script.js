function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
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