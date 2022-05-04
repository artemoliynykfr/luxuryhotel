// webp
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
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
// header burger	
function burgerMenu() {
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if (!menu.classList.contains('active')) {
			menu.classList.add('active')
			burger.classList.add('active')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 1110) {
			menu.classList.remove('active')
			burger.classList.remove('active')
			body.classList.remove('locked')
		}
	})
}
burgerMenu();
// body__swiper
if (document.querySelector('.body__swiper')) {
	// review
	new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: !0,
		cssMode: true,
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
}
// body__room
if (document.querySelector('.body__room')) {
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
	function accordion() {
		const items = document.querySelectorAll('.accordion__header')
		items.forEach(item => {
			item.addEventListener("click", () => {
				const parent = item.parentNode
				if (parent.classList.contains('show')) {
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
}
// body__scroll
if (document.querySelector('.body__scroll')) {
	//scroll to
	new SmoothScroll('a[href*="#"]')
}
// animation on start
const tl = new TimelineMax()
const mySplitText = new SplitText('.start__text > h4, .start__text > h2, .start__text > h3, .start__text > p, .start__contact > h2', { type: 'chars' })
const mySplitText1 = new SplitText('.start__text > p', { type: 'chars' })
const chars = mySplitText.chars
const chars1 = mySplitText1.chars
tl.from('.header', .7, { y: '-100%' })
tl.staggerFrom(chars, .4, { opacity: 0 }, .1, ">-0.6")
tl.staggerFrom(chars1, .4, { opacity: 0 }, .03, ">-6")

let left = document.querySelector('.content-left')
let bottom = document.querySelector('.content-bottom')
let right = document.querySelector('.content-right')
let opacity = document.querySelector('.content-opacity')
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray(left).forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { x: '-100px' }, { x: "0", duration: .8, immediateRender: false })
})
gsap.utils.toArray(bottom).forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { y: '100px' }, { y: "0", duration: .8, immediateRender: false })
})
gsap.utils.toArray(right).forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { x: '100px' }, { x: "0", duration: .8, immediateRender: false })
})
gsap.utils.toArray(opacity).forEach((el, index) => {
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
		.set(el, { transformOrigin: 'center center' })
		.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1, immediateRender: false })
})