$(window).on('load', function () {
    //preloader
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');

    //hero animations
    $('.banner h1').addClass('animate__animated animate__fadeInDown animate__slow')
    $('.banner div').addClass('animate__animated animate__fadeInUp animate__slow') 
})


$(function () {
    new WOW().init();

    //nav menu button actions
    $('.nav-icon').on('click', function() {
        $('.nav-menu').addClass('menu-collapse')
        $('.nav-background').show()
    });
    $('.nav-close').on('click', function() {
        $('.nav-menu').removeClass('menu-collapse')
        $('.nav-background').hide()
    })

    //navlink scroll
    $('a.nav-link').on('click', function(event){
        event.preventDefault()
        $('.nav-menu').removeClass('menu-collapse')
        $('.nav-background').hide()

        let sectionId = $(this).attr('href')

        $('html,body').animate({
            scrollTop: $(sectionId).offset().top
        },1000)
    })
})



