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

$('[href="/index/#reviews"]').on("click", function () {
	$('.header').removeClass('active');
	$('body').removeClass('lock');
	$('.header__last').removeClass('active');
	setTimeout(function(){
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 600);
		return false;
	}, 300)
});

function scrollHeader() {
	if ($(window).scrollTop() > 5) {
		$('.header').addClass('fixed');
	} else {
		$('.header').removeClass('fixed');
	}
}

function adjustFilterPosition() {
	if ($(window).width() < 760) {
		// Если ширина экрана меньше 760px, сбрасываем стили и класс
		$('.filter--fixed').css('top', '').removeClass('under-header');
		return;
	}

	var filter = $('.filter--fixed');
	if (filter.length === 0) {
		// Если нет элемента с классом .filter--fixed, ничего не делаем
		return;
	}

	var scrollTop = $(window).scrollTop();
	var headerHeight = $('.header').outerHeight();
	var filterStartOffset = filter.data('startOffset'); // Начальная позиция filter

	// Устанавливаем начальную позицию filter, если она ещё не установлена
	if (!filterStartOffset) {
		filterStartOffset = filter.offset().top;
		filter.data('startOffset', filterStartOffset);
	}

	if (scrollTop + headerHeight >= filterStartOffset) {
		filter.css('top', headerHeight + 'px').addClass('under-header');
	} else {
		filter.css('top', '').removeClass('under-header');
	}
}

function onScrollOrResize() {
	scrollHeader();
	adjustFilterPosition();
}

$(document).ready(function() {
	scrollHeader();
	adjustFilterPosition();

	$(window).scroll(onScrollOrResize);
	$(window).resize(onScrollOrResize);
});


