// Generated by CoffeeScript 1.9.1
define(['../_lib/lazyload', './_index/slider', './_index/vmctrl'], function(lazyload, Slider, vmctrl) {
    var init;
    init = function() {
        Slider.init();
        $('img').lazyload({
            placeholder: STATIC_PATH + '/img/dot.png'
        });
        vmctrl.run(function() {
            $(window).resize(function() {
                $("#iBar").css({
                    'height': $(window).height()
                });
            });
        });
    };
    init();
});
