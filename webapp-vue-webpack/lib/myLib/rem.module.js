(function() {
    var timeCode, dom = window.document,
        domEle = dom.documentElement;
    function resize() {
        var domWidth = domEle.clientWidth;
        if (domWidth > 640) {
            domWidth = 640;
        } else if (domWidth <= 320) {
            domWidth = 320;
        }
        window.rem = domWidth / 6.4;
        domEle.style.fontSize = window.rem + 'px';
    }
    window.addEventListener('resize', function() {
        clearTimeout(timeCode);
        timeCode = setTimeout(resize, 300);
    });
resize();
})(window)
