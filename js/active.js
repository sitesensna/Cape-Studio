(function (N$) {
    'use strict';

    var N$window = N$(window);

    // :: 1.0 Masonary Gallery Active Code

    var proCata = N$('.amado-pro-catagory');
    var singleProCata = ".single-products-catagory";

    if (N$.fn.imagesLoaded) {
        proCata.imagesLoaded(function () {
            proCata.isotope({
                itemSelector: singleProCata,
                percentPosition: true,
                masonry: {
                    columnWidth: singleProCata
                }
            });
        });
    }

    // :: 2.1 Search Active Code
    var amadoSearch = N$('.search-nav');
    var searchClose = N$('.search-close');

    amadoSearch.on('click', function () {
        N$('body').toggleClass('search-wrapper-on');
    });

    searchClose.on('click', function () {
        N$('body').removeClass('search-wrapper-on');
    });

    // :: 2.2 Mobile Nav Active Code
    var amadoMobNav = N$('.amado-navbar-toggler');
    var navClose = N$('.nav-close');

    amadoMobNav.on('click', function () {
        N$('.header-area').toggleClass('bp-xs-on');
    });

    navClose.on('click', function () {
        N$('.header-area').removeClass('bp-xs-on');
    });

    // :: 3.0 ScrollUp Active Code
    if (N$.fn.scrollUp) {
        N$.scrollUp({
            scrollSpeed: 1000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: 4.0 Sticky Active Code
    N$window.on('scroll', function () {
        if (N$window.scrollTop() > 0) {
            N$('.header_area').addClass('sticky');
        } else {
            N$('.header_area').removeClass('sticky');
        }
    });

    // :: 5.0 Nice Select Active Code
    if (N$.fn.niceSelect) {
        N$('select').niceSelect();
    }

    // :: 6.0 Magnific Active Code
    if (N$.fn.magnificPopup) {
        N$('.gallery_img').magnificPopup({
            type: 'image'
        });
    }

    // :: 7.0 Nicescroll Active Code
    if (N$.fn.niceScroll) {
        N$(".cart-table table").niceScroll();
    }

    // :: 8.0 wow Active Code
    if (N$window.width() > 767) {
        new WOW().init();
    }

    // :: 9.0 Tooltip Active Code
    if (N$.fn.tooltip) {
        N$('[data-toggle="tooltip"]').tooltip();
    }

    // :: 10.0 PreventDefault a Click
    N$("a[href='#']").on('click', function (N$) {
        N$.preventDefault();
    });

    // :: 11.0 Slider Range Price Active Code
    N$('.slider-range-price').each(function () {
        var min = jQuery(this).data('min');
        var max = jQuery(this).data('max');
        var unit = jQuery(this).data('unit');
        var value_min = jQuery(this).data('value-min');
        var value_max = jQuery(this).data('value-max');
        var label_result = jQuery(this).data('label-result');
        var t = N$(this);
        N$(this).slider({
            range: true,
            min: min,
            max: max,
            values: [value_min, value_max],
            slide: function (event, ui) {
                var result = label_result + " " + unit + ui.values[0] + ' - ' + unit + ui.values[1];
                console.log(t);
                t.closest('.slider-range').find('.range-price').html(result);
            }
        });
    });

})(jQuery);