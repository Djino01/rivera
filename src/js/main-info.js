/*Product slider*/
if ($('.main-info').length > 0) {
    $('.main-info-big').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		fade: true,
		asNavFor: '.main-info-small',
		autoplay: true,
		autoplaySpeed: 3000,
    });
    $('.main-info-small').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.main-info-big',
		arrows: false,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 3000,
    });
}