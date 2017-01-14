$('.word').fadeIn(1000);

$('.cover').fadeIn(1000);

$('#list_1').click(function() {
	$('.word').fadeOut(300);

	$('.cover').fadeOut(300);
	$('.word').delay(300).fadeIn(1000);

	$('.cover').delay(300).fadeIn(1000);
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	$('#page1').slideDown(700);
	$('#page1').siblings().slideUp(700);
})
$('#list_2').click(function() {
	$('.word').fadeOut(300);

	$('.cover').fadeOut(300);
	$('.word').delay(300).fadeIn(1000);

	$('.cover').delay(300).fadeIn(1000);
	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	$('#page2').slideDown(700);
	$('#page2').siblings().slideUp(700);
})
$('#list_3').click(function() {
	$('.word').fadeOut(300);

	$('.cover').fadeOut(300);

	$('.word').delay(300).fadeIn(1000);

	$('.cover').delay(300).fadeIn(1000);

	$(this).addClass('on');
	$(this).siblings().removeClass('on');
	$('#page3').slideDown(700);
	$('#page3').siblings().slideUp(700);
})