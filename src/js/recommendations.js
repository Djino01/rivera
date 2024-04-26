var recommendationsSwiper = new Swiper(".recommendations__swiper", {
	slidesPerView: 4,
	spaceBetween: 6,
	slidesPerGroup: 1,
	loop: true,
	speed: 1000,
	breakpoints: {
		370: {
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			spaceBetween: 6,
		},
		680: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		760: {
			slidesPerView: 2.2,
			slidesPerGroup: 1,
		},
		1010: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},
		1200: {
			slidesPerView: 4,
			spaceBetween: 6,
			slidesPerGroup: 1,
		}
	},
});

var recSwiper = new Swiper(".card__swiper-rec", {
	slidesPerView: 1,
	spaceBetween: 0,
	slidesPerGroup: 1,
	mousewheel: false,
	keyboard: true,
	pagination: {
		el: ".card__swiper-rec .swiper-pagination",
		clickable: true,
	},
});