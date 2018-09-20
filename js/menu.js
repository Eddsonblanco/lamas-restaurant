$(document).ready(function(){
	var altura = $('.menu2').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu2').addClass('menu-fixed');
		} else {
			$('.menu2').removeClass('menu-fixed');
		}
	});
 
});


$(document).ready(function(){
    $('.menu1 a') .each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this) .animate({
            top:'0'
        },1000+ (index * 500));
    });

});	
