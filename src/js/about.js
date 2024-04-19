/*Product slider*/
if ($('.about').length > 0) {
    $('.about-top').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
    });

    // Функция для применения параллакс-эффекта
    function applyParallaxEffect(slick, currentSlide) {
        const activeSlide = $(slick.$slides[currentSlide]);
        const img = activeSlide.find('.about-top__img img');

        function handleMouseMove(e) {
            const rect = img[0].getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = (x / rect.width - 0.5) * 100;
            const yPercent = (y / rect.height - 0.5) * 100;

            gsap.to(img, {
                duration: 0.5,
                xPercent: -xPercent * 0.1,
                yPercent: -yPercent * 0.1,
                ease: "power1.out"
            });
        }

        // Удаляем обработчики с предыдущих слайдов
        $('.about-top__img img').off('mousemove');
        // Привязываем новый обработчик к активному слайду
        img.on('mousemove', handleMouseMove);
    }

    // Обработчик события после смены слайда
    $('.about-top').on('afterChange', function(event, slick, currentSlide) {
        applyParallaxEffect(slick, currentSlide);
    });

	// Запуск параллакса для начального слайда после инициализации
    applyParallaxEffect($('.about-top').slick('getSlick'), $('.about-top').slick('slickCurrentSlide'));
	
	$('.about-top').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$(".about__right-img, .about__coll, .about__left-box").removeClass("active");
		$('[data-img="' + nextSlide + '"]').addClass("active");
		$('[data-coll="' + nextSlide + '"]').addClass("active");
		$('[data-tab="' + nextSlide + '"]').addClass("active");
	});
	$(".about__right-img").on("click", function(){
        var img = $(this).data('img');
        $('.about-top').slick('slickGoTo', img);
        $(".about__right-img, .about__coll, .about__left-box").removeClass("active");
        $(this).addClass("active");
		$('[data-coll="' + img + '"]').addClass("active");
		$('[data-tab="' + img + '"]').addClass("active");
    });
	$(".about__coll").on("click", function(){
        var coll = $(this).data('coll');
        $('.about-top').slick('slickGoTo', coll);
        $(".about__right-img, .about__coll, .about__left-box").removeClass("active");
        $(this).addClass("active");
		$('[data-img="' + coll + '"]').addClass("active");
		$('[data-tab="' + coll + '"]').addClass("active");
    });

}
