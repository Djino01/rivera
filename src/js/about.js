/*Product slider*/
if ($('.about').length > 0) {
    $('.about-top').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
    });
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
