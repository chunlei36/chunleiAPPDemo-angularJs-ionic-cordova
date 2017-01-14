var count = 1;
$('#likeBtn').click(function() {
	if(count % 2 != 0) {
		$('#likeBtn  i').css({
			'color': '#fd6363'
		})
	} else {
		$('#likeBtn i').css({
			'color': '#333'
		})
	}
	count++;
})