var masonry = (function($) {
    'use strict';

    function init() {
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
        });
    }

    return {
        init: init
    };

}(jQuery));

export default masonry;