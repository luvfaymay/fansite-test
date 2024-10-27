document.addEventListener('DOMContentLoaded', function() {
    if (typeof jQuery !== 'undefined' && typeof jQuery.fn.slick !== 'undefined') {
        
        // General initialization for all carousels except carousel-1 and carousel-2
        $('.carousel').not('.carousel-1, .carousel-2').slick({
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

        // Specific initialization for carousel-1 with unique navigation buttons
        if ($('.carousel-1').length) {
            $('.carousel-1').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                prevArrow: $('#carousel1-prev'),
                nextArrow: $('#carousel1-next'),
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

        // Specific initialization for carousel-2 with unique navigation buttons
        if ($('.carousel-2').length) {
            $('.carousel-2').slick({
                dots: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                adaptiveHeight: true,
                arrows: true,
                prevArrow: $('#carousel2-prev'),
                nextArrow: $('#carousel2-next'),
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
