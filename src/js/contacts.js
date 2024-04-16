if ($("#map").length > 0) {
	ymaps.ready(function () {
		// Проверка ширины экрана
		if (window.innerWidth > 760) {
			var yValue = [43.588829, 39.722729];
		} else {
			var yValue = [43.588417, 39.715749];
		}
		var myMap = new ymaps.Map('map', {
				center: yValue,
				controls: ['zoomControl'],
				zoom: 16
			}, {
				searchControlProvider: 'yandex#search'
			}),

			myPlacemark = new ymaps.Placemark([43.588417, 39.715749], {
				hintContent: 'Ривьера парк отель',
				balloonContent: ''
			});
		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects
			.add(myPlacemark);
	});
}