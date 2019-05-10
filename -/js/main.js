(function (__nodeNs__, __nodeId__) {
    $.widget(__nodeNs__ + "." + __nodeId__, $.ewma.node, {
        options: {},

        __create: function () {
            var w = this;
            var o = w.options;
            var $w = w.element;

            var options = o.options;

            options.itemSelector = o.item_selector;

            $(o.selector).imagesReady(function () {
                $(o.selector).masonry(o.options);

                var n = 20;
                var interval = setInterval(function () {
                    n--;

                    $(o.selector).masonry('layout');

                    if (n < 0) {
                        clearInterval(interval);
                    }
                }, 200);
            });


        }
    });
})(__nodeNs__, __nodeId__);
