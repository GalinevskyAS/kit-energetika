$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__burger, .header__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__link').click(function () {
		$('.header__burger, .header__list').removeClass('active');
		$('body').removeClass('lock'); 
	});

	// Плавный скролл к блокам-якорям
	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");	
		let headerHeight = document.querySelector('.header').clientHeight

		$('html, body').animate({scrollTop: $(_href).offset().top - headerHeight});
		$('.header__burger').removeClass('active');  
		$('body').removeClass('lock'); 

		return false;
	});

	// Переключение цвета ссылки меню при скролле на соответствующий блок 
	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY; // Глубина скрола

		// Бегаем по всем классам section и слушаем, когда дойдём до секции.
		document.querySelectorAll('.section').forEach((el, i) => { 
			if (el.offsetTop - document.querySelector('.header').clientHeight <= scrollDistance) {  
				// Дошли до секции - удаляем у всех ссылок active (обратились к a, потому что нужно удалить класс сразу у всех ссылок) 
				document.querySelectorAll('.header__list a').forEach((el) => { 
					if (el.classList.contains('active')) {  
						el.classList.remove('active'); 
					}
				});

				// Добавляем ссылке текущей секции active (обратились к li, потому что мы бегали по родительским элементам li, в ожидании секции. И нам нужно присвоить active к одному дочернему a)
				document.querySelectorAll('.header__list li')[i].querySelector('a').classList.add('active');
			}
		});
	})

	;

});