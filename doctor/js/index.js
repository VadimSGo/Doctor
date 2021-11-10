$(document).ready(function () {
    AOS.init();
    
    //REVIEWS SLIDER
    $('.reviews-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
    });

    //TIMER
    $('#counter').timer( {
        countdown: true,
        duration: '30m',
        format: '%M : %S'
    });

    //SCROLL
    $(function () {
        $('.header__btn').on('click', function () 
        {
            $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
            return false;
        });
    });
});