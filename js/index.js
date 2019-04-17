function BkgdResize(tag, width1, height1) {
    tag = document.querySelector(tag);
    var width2 = tag.offsetWidth;
    var height2 = (width2 * height1) / width1;
    tag.style.height = height2 + 'px';
    tag.style.backgroundRepeat = 'no-repeat';
}

function setResponsive() {
    BkgdResize('header', 1200, 400);
    BkgdResize('footer', 1146, 215);
}

var body = document.querySelector('body');

body.onresize = function() {
    setResponsive();
}

window.onload = function() {
    setResponsive();
}
