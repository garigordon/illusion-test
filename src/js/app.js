import headerNav from './modules/nav';
import classIE from './modules/classie';
import uiSearch from './modules/uiSearch';
import masonry from './modules/masonry';
import stikyHeader from './modules/sticky-header'
import backToTop from './modules/backTop'

(function ($, $wnd, $body, $doc) {

	$(function () {
		headerNav.init();
        classIE.init();
        uiSearch.init();
        masonry.init();
        stikyHeader.init();
        backToTop.init();
	});

}(jQuery, $(window), $('body'), $(document)));
