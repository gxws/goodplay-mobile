function fontSize() {
    var a = document.documentElement.clientWidth;
    a = a > 640 ? 640 : a;
    document.getElementsByTagName("html")[0].style.fontSize = a / 16 + "px"
}
fontSize();

function hengshuping() {
    if (window.orientation == 180 || window.orientation == 0) {
        setTimeout(function() {
            fontSize()
        }, 100)
    };
    if (window.orientation == 90 || window.orientation == -90) {
        setTimeout(function() {
            fontSize()
        }, 100)
    }
}
var orientation = 0;

function screenOrientationEvent() {
    hengshuping()
}
var innerWidthTmp = window.innerWidth;

function screenOrientationListener() {
    try {
        var a = window.innerWidth;
        if (a != innerWidthTmp) {
            if (a > window.innerHeight) {
                orientation = 90
            } else {
                orientation = 0
            }
            screenOrientationEvent();
            innerWidthTmp = a
        }
    } catch (e) {
        throw new Error('转屏时发生错误');
    };
    setTimeout("screenOrientationListener()", 100)
}
screenOrientationListener();