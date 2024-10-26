document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
        // General initialization for all carousels
        $('.carousel').slick({
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            arrows: true,
            prevArrow: '.carousel-prev',
            nextArrow: '.carousel-next',
            fade: true,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        fade: true
                    }
                }
            ]
        });

        // Specific initialization for carousel-1 if it exists
        if ($('.carousel-1').length) {
            $('.carousel-1').slick('unslick'); // Remove previous initialization if any
            $('.carousel-1').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                prevArrow: $('#carousel-1-prev'),
                nextArrow: $('#carousel-1-next'),
                fade: true,
                cssEase: 'linear',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            fade: true
                        }
                    }
                ]
            });
        }

        // Specific initialization for carousel-2 if it exists
        if ($('.carousel-2').length) {
            $('.carousel-2').slick('unslick'); // Remove previous initialization if any
            $('.carousel-2').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                prevArrow: $('#carousel-2-prev'),
                nextArrow: $('#carousel-2-next'),
                fade: true,
                cssEase: 'linear',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            fade: true
                        }
                    }
                ]
            });
        }
        
    } else {
        console.error('jQuery or Slick carousel not loaded');
    }
});
