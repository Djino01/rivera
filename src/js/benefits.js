var swiper = new Swiper(".benefits__left-swiper", {
	spaceBetween: 0,
	slidesPerView: 1,
	direction: "vertical",
  });
  var swiper2 = new Swiper(".benefits__right-swiper", {
	spaceBetween: 0,
	slidesPerView: 1,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	thumbs: {
	  swiper: swiper,
	},
  });