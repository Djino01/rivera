// JavaScript для инициализации каждого слайдера
document.querySelectorAll('.card__swiper').forEach(function(swiperContainer) {
    new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
        pagination: {
            el: swiperContainer.querySelector('.swiper-pagination'),
            clickable: true,
        },
        navigation: {
            nextEl: swiperContainer.querySelector('.card-arrow_next'),
            prevEl: swiperContainer.querySelector('.card-arrow_prev'),
        },
    });
});
