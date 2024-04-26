/*Product slider*/
if ($('.product').length > 0) {
    $('.product-top__slick').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.product-top__swiper'
    });
    $('.product-top__swiper').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: '.product-top__slick',
		arrows: false,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				slidesToShow: 5,
				}
			},
			{
				breakpoint: 1010,
				settings: {
				slidesToShow: 7,
				}
			},
			{
				breakpoint: 760,
				settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 4,
				}
			},
			{
				breakpoint: 480,
				settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 3,
				}
			},
			{
				breakpoint: 370,
				settings: {
				vertical: false,
				verticalSwiping: false,
				slidesToShow: 2,
				}
			}
		]
    });
    $('.product-top__arrow_prev').on("click", function(event) {
		$(this).parents('.product-top').find('.product-top__slick').slick('slickPrev');
    });
    $('.product-top__arrow_next').on("click", function(event) {
		$(this).parents('.product-top').find('.product-top__slick').slick('slickNext');
    });

	var sticky = new Sticky('.sticky');
}