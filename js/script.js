function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
// header burger	
function burger(){
	let header__burger = document.querySelector('.header__burger'),
		 header__menu = document.querySelector('.header__menu'),
		 header = document.querySelector('.header');
	header__burger.addEventListener('click', function(){
		if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active')){
			header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active')
		} else {
			header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active')
		}
	})
}
burger();
// review
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
// room swiper
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
// form validation
let reg = /[A-Za-zA]/;
let email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
let inpname = document.querySelector('#input__name');
let inpemail = document.querySelector('#input__email');
let span = document.querySelector('#span')
document.querySelector('#validate__button').onclick = function(e){
	e.preventDefault();
	if (!validate(reg, inpname.value || email, inpemail.value)) {
		notValid(inpname, inpemail)
	} else {
		valid(inpname, inpemail)
	}
}
function validate(regex, inpname, inpemail){
	return regex.test(inpname, inpemail);
}
function notValid(inpname, inpemail){
	inpname.classList.add('is-invalid') || inpemail.classList.remove('is-invalid')
}
function valid(inpname, inpemail){
	inpname.classList.remove('is-invalid') || inpemail.classList.remove('is-invalid')
	inpname.classList.add('is-valid') || inpemail.classList.add('is-valid')
}
// accordion
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