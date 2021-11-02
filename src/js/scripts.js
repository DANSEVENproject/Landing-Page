$(function() {
    var button = $('.button-menu');
    button.on('click', function() {
        if ($('.navbar__menu').css('display') == "none") {
            $('.navbar__menu').css('display', 'flex');
            $('.navbar__menu').css('animation', 'fadeInDown');
            $('.navbar__menu').css('animation-duration', '1s');

        } else {
            $('.navbar__menu').css('display', 'none');
        }
    });
});