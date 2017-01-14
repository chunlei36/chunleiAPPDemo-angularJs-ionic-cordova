$('#price a').eq(0).click(function(){
	$('#price a').eq(0).addClass('on');
	$('#price a').eq(1).removeClass('on');
	$("#list").show();
	$("#list2").hide();
})
$('#price a').eq(1).click(function(){
	$('#price a').eq(1).addClass('on');
	$('#price a').eq(0).removeClass('on');
	$("#list2").show();
	$("#list").hide();
})
