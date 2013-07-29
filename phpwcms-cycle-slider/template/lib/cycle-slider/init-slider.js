/*! 
 *  phpwcms Cycle Plugin
 *  --------------------
 *
 *  Copyright (c) 2013 Oliver Georgi — oliver@phpwcms.de
 *
 */
$(function(){

	var $sliderSection = $('.cycle-slider-section');
	if($sliderSection) {

		var $sliderItems = $('.slider-item', $sliderSection);
		
		// Select first <img> Tag, catch image src and use it as CSS background image
		// Then hide the <img> Tag
		$sliderItems.each(function() {
			var $item = $(this);
			var $itemImage = $('img:first', $item);
			var $itemImageSrc = $itemImage.attr('src');
			if($itemImageSrc) {
				$item.css('background-image', 'url(' + $itemImageSrc + ')');
				$itemImage.hide();
			}
		});

		// Cycle but only when more than 1 item
		if($sliderItems.length > 1) {
			
			// Add Prev/Next and Pagination (Dots)
			$sliderSection
				.append('<a id="slider-item-next" href="#" class="icon-chevron-sign-right icon-3x slider-nav">')
				.append('<a id="slider-item-prev" href="#" class="icon-chevron-sign-left icon-3x slider-nav">')
				.append('<div id="slider-pagination" class="slider-pagination">');
			
			// jQuery Cycle plugin options
			// http://jquery.malsup.com/cycle/options.html
			$sliderSection.cycle({
				fx: 'scrollRight',
				speed: 'slow',
				pager: '#slider-pagination',
				next: '#slider-item-next',
				prev: '#slider-item-prev',
				slideExpr: '.slider-item',
				pauseOnPagerHover: 1,
				pause: 1,
				timeout: 5000,
				startingSlide: 0,
				fit: 1,
				slideResize: 0
			});
		}
	}
});