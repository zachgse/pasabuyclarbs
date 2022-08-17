$(document).ready(function () {
        var carousel = $("#owl-demo");
        carousel.owlCarousel({
        items: 4,
        loop:true,
        nav: true,
        autoplay: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });  
});