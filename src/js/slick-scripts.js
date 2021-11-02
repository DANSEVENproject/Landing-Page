new WOW().init();

$(function() {
    $('.slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        appendDots: $('.offer-customer__block-slick__chapter'),
    })
})