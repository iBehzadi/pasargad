$(function () {
    new WOW().init();
    $('.nav-icon').on('click', function() {
        $('.nav-menu').addClass('menu-collapse')
        $('.nav-background').show()
    });

    $('.nav-close').on('click', function() {
        $('.nav-menu').removeClass('menu-collapse')
        $('.nav-background').hide()
    })
})


$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');


    $('.banner h1').addClass('animate__animated animate__fadeInDown animate__slow')
    $('.banner div').addClass('animate__animated animate__fadeInUp animate__slow')

    
})


