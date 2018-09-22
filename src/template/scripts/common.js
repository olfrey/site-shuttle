$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');



	var header = $('.header'),
			headerClass = 'header_scroll';
	$(window).on('load scroll', function(event) {
		if ($(window).scrollTop() > 0) {
			header.addClass(headerClass);
		} else{
			header.removeClass(headerClass);
		}
	});


	$('.auto__item').each(function(index, el) {
		var slider = $(this).find('.auto__slider'),
				content = $(this).find('.auto__content');

		slider.slick({
			dots: true
			// asNavFor: content
		});

		content.slick({
			// asNavFor: slider
		});
	});

	$('.buyout__table table tbody td').each(function(index, el) {
		var value = $(this).text();
		if (value == '+') {
			$(this).html('<span class="color-green fz30">' + value + '</span>');
		} else if(value == '-') {
			$(this).html('<span class="color-blue fz30">' + value + '</span>');
		} else if (value == 'ДА') {
			$(this).html('<span class="color-green">' + value + '</span>');
		} else if(value == 'НЕТ') {
			$(this).html('<span class="color-blue">' + value + '</span>');
		}
	});

	$('.footer__toggle-head').click(function(event) {
		var body = $(this).next('.footer__toggle-body');
		$(this).toggleClass('footer__toggle-head_toggle');
		body.slideToggle(300)
	});

	var wrap = $('.wrap'),
			wrapClass = 'wrap_toggle',
			header = $('.header'),
			headerToggle = 'header_toggle',
			hum = $('.hum'),
			humClass = 'hum_toggle',
			nav = $('.mobile-nav'),
			navClass = 'mobile-nav_toggle';

	

	hum.click(function(event) {
		hum.toggleClass(humClass);
		wrap.toggleClass(wrapClass);
		header.toggleClass(headerToggle);
		nav.toggleClass(navClass);
	});
	
	isMobile = {//Проверяем с какого устройства мы зашли
		Android: function() {
		return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
		};
		if (isMobile.any()) {//Если действительно с мобильно устройства то запускаем нашу функцию
		itismobile();
		}
		function itismobile(){
		$('#video').get(0).play();//Автозапуск
	}

	$(".mobile-nav__list a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top-50+"px"}, 1500);
    
    hum.toggleClass(humClass);
		wrap.toggleClass(wrapClass);
		header.toggleClass(headerToggle);
		nav.toggleClass(navClass);

		return false;
	});

});
