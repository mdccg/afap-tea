function percent(n, per) { return (n * per) / 100; }

function bkgdResize(tag, width1, height1) {
    tag = document.querySelector(tag);
    var width2 = tag.offsetWidth;
    var height2 = (width2 * height1) / width1;
    tag.style.height = height2 + 'px';
    tag.style.backgroundRepeat = 'no-repeat';
}

function setResponsive() {
    bkgdResize('header', 1200, 400);
    bkgdResize('footer', 1146, 215);
    bkgdResize('div.bkgd-ff0', 1146, percent(215, 15));
    
}

var body = document.querySelector('body');

body.onresize = function() {
    setResponsive();
}

window.onload = function() {
    setResponsive();
}
