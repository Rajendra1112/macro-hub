document.querySelector('.opennav').addEventListener("click", openNav);
document.querySelector('.closenav').addEventListener("click",closeNav);
document.querySelector('.openbtn').addEventListener("click", openSearch);
document.querySelector('.closebtn').addEventListener("click",closeSearch);
function openNav() {
    document.getElementById("myNav").style.height = "100vh";
    // alert("Hello world");
}
function closeNav() {
    document.getElementById("myNav").style.height = "0";
}
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

$(document).ready(function () {

    // scroll top
    $(document).on( 'scroll', function(){
        if ($(window).scrollTop() > 200) {
        $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
    
    $('.scroll-top-wrapper').on('click', scrollToTop);
    
    function scrollToTop() {
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
        element = $('body');
        offset = element.offset();
        offsetTop = offset.top;
        $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
    }


    // banner
    $(".owl-banner").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:1000,
        smartSpeed:350,
        autoplayHoverPause:false,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });

    // destination
    $(".owl-destination").owlCarousel({
        items:2,
        loop:false,
        nav:true,
        dots:false,
        autoplay:false,
        autoplaySpeed:1000,
        smartSpeed:350,
        autoplayHoverPause:true,
        margin:40,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });

    // classes
    $(".owl-classes").owlCarousel({
        items:3,
        loop:false,
        nav:false,
        dots:true,
        autoplay:false,
        autoplaySpeed:1000,
        smartSpeed:350,
        autoplayHoverPause:true,
        margin:20,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });

    // testimonial
    $(".owl-testimonial").owlCarousel({
        items:2,
        loop:false,
        nav:false,
        dots:true,
        autoplay:false,
        autoplaySpeed:1000,
        smartSpeed:350,
        autoplayHoverPause:true,
        // margin:20,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });

    // universities
    $(".owl-universities").owlCarousel({
        items:6,
        loop:false,
        nav:false,
        dots:true,
        autoplay:false,
        autoplaySpeed:1000,
        smartSpeed:350,
        autoplayHoverPause:true,
        margin:20,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });

    // blog
    $(".owl-blog").owlCarousel({
        items:3,
        loop:false,
        nav:false,
        dots:true,
        autoplay:false,
        autoplaySpeed:1000,
        smartSpeed:350,
        autoplayHoverPause:true,
        // margin:20,
        navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
    });

    //video popup
    $(".vpop").on('click', function(e) {
        e.preventDefault();
        $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
        var srchref='',autoplay='',id=$(this).data('id');
        if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
        else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
        if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
        $("#video-popup-iframe").attr('src', srchref+id+autoplay);
        $("#video-popup-iframe").on('load', function() {
        $("#video-popup-container").show();
        });
        });
        $("#video-popup-close, #video-popup-overlay").on('click', function(e) {
        $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
        $("#video-popup-iframe").attr('src', '');
    });

});

