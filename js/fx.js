

$(document).ready(function(){
    $('.menu1 a') .each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this) .animate({
            top:'0'
        },1000+ (index * 500));
    });

    if($(window).width() >800 ){
        $('header .text') .css({
            opacity:0,
            marginbot:'0'
        });
        $('header .text').animate({
            opacity:1,
            marginbot:'1000'
            

        } , 1500);
    }

   
$(function(){
    $('.main .acerca-de .contenedor .slider div:gt(0)').hide();
         setInterval(function(){
             $('.main .acerca-de .contenedor .slider div:first-child').fadeOut(1000)
                 .next('div').fadeIn(1000)
                 .end().appendTo('.slider');
         },2000);
});


    var acercaDe = $('#acerca-de').offset().top,
		menu = $('#platillos').offset().top,
		galeria = $('#galeria').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		
		$('html, body').animate({
			scrollTop: acercaDe - 100
		}, 500);
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});
});

   
 