if ($('.promo').length > 0) {
	var swiper = new Swiper(".promo-swiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: "fade",
		slideToClickedSlide: true,
		normalizeSlideIndex: true,
		mousewheel: {
			invert: false,
			eventsTarget: ".promo",
			releaseOnEdges: true,
		},
	});

	// Обработчик события колеса мыши на элементе .promo
	document.querySelector('.promo').addEventListener('wheel', function(event) {
		if (event.deltaY > 0 && swiper.isEnd) {
			// Если скролл вниз и слайдер на последнем слайде, позволяем скролл страницы
			swiper.mousewheel.disable();
		} else {
			// В других случаях включаем управление слайдером
			swiper.mousewheel.enable();
		}
	});
}
