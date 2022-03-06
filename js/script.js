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
	spaceBetween: 20,
	autoplay: {
		delay: 7000,
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
// accordion
function accordion(){
	const items = document.querySelectorAll('.accordion__header')
	items.forEach(item => {
		item.addEventListener("click", () => {
			const parent = item.parentNode
			if (parent.classList.contains('show')){
				parent.classList.remove('show')
			} else {
				document
					.querySelectorAll('.accordion__item')
					.forEach(child => child.classList.remove('show'))
				parent.classList.add('show')
			}
		})
	})
}
accordion()
//scroll to
new SmoothScroll('a[href*="#"]')