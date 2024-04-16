const minWidth = 1010;

function rearrangeHeader() {
    const newWidth = $(window).width();
    const $firstHeader = $('.header__menu_first');
    const $lastMenu = $('.header__last-resize');
    const $container = $('.header__first-resize');

    if (newWidth <= minWidth) {
        $firstHeader.insertBefore($lastMenu);
    } else {
        $firstHeader.insertBefore($container);
    }
}

$(window).on('resize', rearrangeHeader).trigger('resize');

$('.header__burger').on("click", function (event) {
	$(this).toggleClass('active');
	$('.header').toggleClass('active');
	$('body').toggleClass('lock');
	$('.header__last').toggleClass('active');
});
