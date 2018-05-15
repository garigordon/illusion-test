var backToTop = (function($) {
    'use strict';

    function init() {
        var offset = 520;
        var duration = 500;
        $(window).scroll(function() {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(duration);
            } else {
                $('.back-to-top').fadeOut(duration);
            }
        });
        $('.back-to-top').click(function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, duration);
            return false;
        });
    }

    return {
        init: init
    };

}(jQuery));

export default backToTop;