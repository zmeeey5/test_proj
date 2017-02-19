
(function ($){
    'use strict';

    var $imgSvg         = $('img.img-svg');
    var $popup          = $('.popup');
    var $popupBackdrop  = $('.popup-backdrop');

    $(document).ready(function () {
        // img to svg converter
        $imgSvg.each(function () {
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function (data) {
                var $svg = jQuery(data).find('svg');

                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }

                if (typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass + ' svg');
                }

                $svg = $svg.removeAttr('xmlns:a');
                $img.replaceWith($svg);
            }, 'xml');
        });

        $popupBackdrop.on('click', function(){
            $popup.toggleClass('hide');
            $popupBackdrop.toggleClass('hide');
        });
    });

    $(document).on('click', '[data-popup-id]', function(){
        var $popupId = $(this).attr('data-popup-id');

        $('#' + $popupId).toggleClass('hide');
        $popupBackdrop.toggleClass('hide');
    });
    
})(jQuery);
