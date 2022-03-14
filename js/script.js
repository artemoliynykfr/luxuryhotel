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
// body__swiper
if (document.querySelector('.body__swiper')){
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
}
// body__room
if (document.querySelector('.body__room')){
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
}
// body__scroll
if (document.querySelector('.body__scroll')){
	//scroll to
	new SmoothScroll('a[href*="#"]')
}
// animation on start
const tl = new TimelineMax()
const mySplitText = new SplitText('.start__text > h1, .start__text > h2, .start__text > h3, .start__text > p, .start__contact > h1', {type: 'chars'})
const chars = mySplitText.chars
tl.from('.header', .7, {y: '-100%'})
tl.staggerFrom(chars, .4, {opacity: 0}, .1, ">-0.6")
tl.from('.start__button', .7, {y: '150%'}, "-=8.4")
// animation on scroll
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.content-left').forEach((el, index) => { 
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      toggleActions: "play none none reverse",
    }
  })
  tl
  .set(el, {transformOrigin: 'center center'})
  .fromTo(el, {x: '-20%'}, {x: "0%", duration: .8, immediateRender: false})
})
gsap.utils.toArray('.content-bottom').forEach((el, index) => { 
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: el,
			start: "top bottom",
			toggleActions: "play none none reverse",
		}
	})
	tl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, {y: '50%'}, {y: "0%", duration: .8, immediateRender: false})
 })
gsap.utils.toArray('.content-right').forEach((el, index) => { 
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      toggleActions: "play none none reverse",
    }
  })
  tl
  .set(el, {transformOrigin: 'center center'})
  .fromTo(el, {x: '20%'}, {x: "0%", duration: .8, immediateRender: false})
})
gsap.utils.toArray('.content-opacity').forEach((el, index) => { 
	let tl = gsap.timeline({
	  scrollTrigger: {
		 trigger: el,
		 start: "top bottom",
		 toggleActions: "play none none reverse",
	  }
	})
	tl
	.set(el, {transformOrigin: 'center center'})
	.fromTo(el, {opacity: 0}, {opacity: 1, duration: 1, immediateRender: false})
 })