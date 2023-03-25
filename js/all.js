$(document).ready(function () {
    $('.dropdown').click(function (e) { 
        e.preventDefault();
        $('.dropdown').toggleClass('active');
        $('.product').toggleClass('active');
    });

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        speed: 700,
        loop: true,
        autoplay: {
            delay: 3000
        },
        effect: 'cube',
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    lightbox.option({
        'resizeDuration': 500,
        'wrapAround': true
      })
    
    $('.top').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 700)
    });
});