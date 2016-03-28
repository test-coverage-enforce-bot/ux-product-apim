$(window).load(function(){

	$(".search-wrap .dropdown-menu li a").click(function(){
	  	$(".search-wrap .dropdown-toggle").html($(this).text() + ' <span class="caret"></span>');
	});

	$('.btn-launch').hover(function(){
		$(this).parent().find('.image-container .after').show();
	},function(){
		$(this).parent().find('.image-container .after').hide();
	})
	
})
