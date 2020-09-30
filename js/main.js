$(function(){
	$('.header__top').append($('<div class="header__menu-btn"><span></span><span></span><span></span></div>'));
	
	$('.header-item__select').selectize({
		sortField: 'text'
	});
	
	$('.header__menu-btn').on('click', function(){
		$(this).toggleClass('header__menu-btn--active');
		$('.header__menu').toggleClass('header__menu--active');
	});

	$('.trims__item-top').on('click', function () {
		$(this).toggleClass('trims__item-top--active');
		$(this).siblings().slideToggle('slow');
	});

});

var swiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 'auto',
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});