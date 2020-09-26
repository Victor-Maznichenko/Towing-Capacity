$(function(){
	
	$('.header-item__select').selectize({
		sortField: 'text'
	});
	
	$('.header__menu-btn').on('click', function(){
		$(this).toggleClass('header__menu-btn--active');
		$('.header__menu').toggleClass('header__menu--active');
	});

});