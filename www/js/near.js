

$(document).ready(function() {
	$('.changeOne').click(function() {
		$(this).children('ul').slideToggle(300);
	})
	$('.changeTwo').click(function() {
		$(this).children('ul').slideToggle(300);
	})
	$('.changeThree').click(function() {
		$(this).children('ul').slideToggle(300);
	})
})
$('article').click(function() {
	$('.changeOne').children('ul').slideUp(200);
	$('.changeTwo').children('ul').slideUp(200);
	$('.changeThree').children('ul').slideUp(200);
})