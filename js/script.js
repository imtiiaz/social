$(function () {

    //  Stories slider

    $('.stories_slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        nav: false,
        speed: 1200,
        autoplaySpeed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
    },
  ]
    });

});
