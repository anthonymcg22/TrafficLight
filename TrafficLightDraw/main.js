"use strict";

var HorizontalRotate = 1;
var reachEnd = true;
var interval;

window.onkeypress = function (e) {

    if (e.keyCode == 32) {
        interval = window.setInterval(function () {
            if (HorizontalRotate >= -1 && reachEnd === true)
                HorizontalRotate += -.006;
            else
                reachEnd = false;

            if (reachEnd === false && HorizontalRotate <= 1)
                HorizontalRotate += .006;
            else
                reachEnd = true;

            document.getElementsByClassName('fliph')[0].style.transform = 'scaleX(' + HorizontalRotate + ')';
            document.getElementById("trafficLightDiv").style.transform = 'scaleY(' + HorizontalRotate + ')';
        }, 20);
    }
};
window.onkeyup = function () {
    window.clearInterval(interval);
};

var trafficLightDiv = document.getElementById("trafficLightDiv");
var lights = document.getElementsByClassName("lights");
var changeLight = function (light) {

    if (light === "greenArrow") {
        document.getElementById("green").style.display = "none";
        document.getElementById("greenArrow").style.display = "initial";
    }
    else {
        document.getElementById("green").style.display = "block";
        document.getElementById("greenArrow").style.display = "none";
    }
    document.getElementById(light).style.opacity = "1";
    for (var i = 0; i < lights.length; i++) {
        if (lights[i] !== document.getElementById(light))
            lights[i].style.opacity = ".32";
    }
}