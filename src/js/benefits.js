if (document.querySelectorAll(".benefits__body").length) {
	gsap.registerPlugin(ScrollTrigger);
	// Получаем массив элементов с классом "services-card"
	const serviceCards = gsap.utils.toArray(".benefits__body");
	const delay = 30;
	const scale = 0.8;
	
	// Находим максимальную высоту среди элементов
	const maxHeight = Math.max(...Array.from(serviceCards).map((e) => e.offsetHeight));
	
	// Устанавливаем всем элементам одинаковую высоту
	serviceCards.forEach((e) => (e.style.height = maxHeight + "px"));
	
	// Распределяем элементы и задаем им анимацию
	const distributeOptions = gsap.utils.distribute({ base: scale, amount: 0.2 });
	
	function applyAnimation(e, index) {
	  let height = e.offsetHeight;
	  const scale = distributeOptions(index, e, serviceCards);
	  
	  // Применяем анимацию масштабирования
	  gsap.to(e, {
		scrollTrigger: {
		  trigger: e,
		  start: "top top",
		  scrub: true,
		  invalidateOnRefresh: true,
		},
		ease: "none",
		scale: scale,
	  });
	  
	  // Создаем метку для элемента
	  ScrollTrigger.create({
		trigger: e,
		start: `top-=${index * delay} top`,
		endTrigger: ".benefits__wrap",
		end: `bottom top+=${height + serviceCards.length * delay}`,
		pin: true,
		pinSpacing: false,
		id: "pin",
		invalidateOnRefresh: true,
	  });
	}
	
	// Применяем анимацию ко всем элементам
	serviceCards.forEach((e, index) => {
	  applyAnimation(e, index);
	});
  }
  
  gsap.from(".benefits", {
	  scrollTrigger: {
		  trigger: ".benefits",
		  start: "-10%",
		  end: "top",
	  },
	  ease: "sine.out",
  });