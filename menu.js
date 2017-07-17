$(document).ready(function(){
	menu();
});

function menu(){
	$(window).on('hashchange', function() {
		var href = window.location.hash.substring(1);
		fade(href);
	});
		
	if(window.location.hash) {
		var href = window.location.hash.substring(1);
		fade(href);
		
	}
}
	
function fade(href){
	if(href == 'index'){
		$('.home_content .vignette').animate({opacity: 1,}, 500);
	}else{
		$('.home_content .vignette').not('.'+href).animate({opacity: 0,}, 500);
		$('.home_content .'+href).animate({opacity: 1,}, 500);
	}
}

