var stikyHeader = (function($) {
    'use strict';

    function init() {
        $(window).scroll(function() {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if(height  > 100) {
                $(".header").addClass('header__sticky')
            } else{
                $(".header").removeClass('header__sticky');
            }
        });
    }

    return {
        init: init
    };
}(jQuery));

export default stikyHeader;