function init() {
	const hamburger = document.querySelector(".hamburger");
	const mobileNav = document.querySelector("#nav-mobile");
	const overlay = document.querySelector(".overlay");
	//const controls = document.querySelector(".controls");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("is-active");
		mobileNav.classList.toggle("active");
		overlay.classList.toggle("open");
	});

	// https://stackoverflow.com/questions/77278507/astro-javascript-is-not-working-on-page-change
	//document.addEventListener("astro:before-swap", () => {}, { once: false }, init);
}

init();

document.addEventListener("astro:after-swap", init);

document.addEventListener("astro:page-load", () => {
	// GSAP TOGGLE LIGHT/DARK THEME
	class HoverButton {
		constructor(el) {
			this.el = el;
			this.hover = false;
			this.calculatePosition();
			this.attachEventsListener();
		}

		attachEventsListener() {
			window.addEventListener("mousemove", (e) => this.onMouseMove(e));
			window.addEventListener("resize", (e) => this.calculatePosition(e));
		}

		calculatePosition() {
			gsap.set(this.el, {
				x: 0,
				y: 0,
				scale: 1,
			});

			const box = this.el.getBoundingClientRect();
			this.x = box.left + box.width * 0.5;
			this.y = box.top + box.height * 0.5;
			this.width = box.width;
			this.height = box.height;
		}

		onMouseMove(e) {
			let hover = false;
			let hoverArea = this.hover ? 0.7 : 0.5;
			let x = e.clientX - this.x;
			let y = e.clientY - this.y;
			let distance = Math.sqrt(x * x + y * y);
			if (distance < this.width * hoverArea) {
				hover = true;
				if (!this.hover) {
					this.hover = true;
				}
				this.onHover(e.clientX, e.clientY);
			}

			if (!hover && this.hover) {
				this.onLeave();
				this.hover = false;
			}
		}

		onHover(x, y) {
			gsap.to(this.el, {
				x: (x - this.x) * 0.4,
				y: (y - this.y) * 0.4,
				scale: 1.15,
				ease: "power2.out",
				duration: 0.4,
			});

			this.el.style.zIndex = 10;
		}
		onLeave() {
			gsap.to(this.el, {
				x: 0,
				y: 0,
				scale: 1,
				ease: "elastic.out(1.2, 0.4)",
				duration: 0.7,
			});

			this.el.style.zIndex = 1;
		}
	}

	const btn = document.querySelector(".controls");
	new HoverButton(btn);

	// INIT BARBA
	// barba.init({
	// 	transitions: [
	// 		{
	// 			async leave() {
	// 				await loaderIn();
	// 			},
	// 			enter() {
	// 				loaderAway();
	// 			},
	// 		},
	// 	],
	// });

	// GSAP TWEEN
	// function loaderIn() {
	// 	return gsap.fromTo(
	// 		loader,
	// 		{
	// 			rotation: 10,
	// 			scaleX: 0,
	// 			xPercent: -5,
	// 		},
	// 		{
	// 			duration: 0.8,
	// 			xPercent: 0,
	// 			scaleX: 1,
	// 			rotation: 0,
	// 			ease: "power4.inOut",
	// 			transformOrigin: "left center",
	// 		}
	// 	);
	// }

	//GSAP SCROLLING
	// useLayoutEffect(() => {
	// 	const smooth = ScrollSmoother.create({
	// 		smooth: 1,
	// 		effects: true,
	// 		smoothTouch: 0.1,
	// 	});
	// }, []);

	//GSAP SCROLL TRIGGER
	// gsap.to(ref.current, {
	// 	scrollTrigger: {
	// 		trigger: ref.current,
	// 		start: "top bottom-=300px",
	// 		end: "top center",
	// 		scrub: 0.5,
	// 		toggleActions: "restart none none reverse",
	// 	},
	// 	autoAlpha: 1, // Turns Visibility to visible & opacity to 1
	// 	duration: 1,
	// });

	/* GSAP Timeline instance */

	// LOCOMOTIVE SCROLL
	// const scroller = new LocomotiveScroll({
	// 	el: document.querySelector("[data-scroll-container]"),
	// 	smooth: true,
	// });
});
