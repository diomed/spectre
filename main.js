document.getElementById('modal').style.display = "block";
document.getElementById('loader').style.display = "block";

window.onload = function() {
    $('#modal, #loader').fadeOut(2000);
};

$(function () {
    $('a').smoothScroll();

    // mobile nav
    $('#menu_icon, .top_nav li').on('click', function() {
        $('.top_nav .nav').toggleClass('show_menu');
        $('#menu_icon').toggleClass('fa-times fa-bars');
        $('.flickity-enabled, h2').toggleClass('hide');
    });

    // flickity
    $('.work_gallery').flickity({
        cellAlign: 'center',
        imagesLoaded: true,
        lazyload: true,
        pageDots: false,
        wrapAround: true
    });
    
    $('.quote_box').flickity({
        cellAlign: 'center',
        prevNextButtons: false,
        autoPlay: true,
        wrapAround: true
    });
});