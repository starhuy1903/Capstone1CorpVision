$(document).ready(function () {
    $('.slickCarousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        dots: false,
        swipe: true,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        infinite: true,
        prevArrow: '<i class="fa-solid fa-arrow-left prev"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right next "></i>'
    });
});