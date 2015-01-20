"use strict";

var lights = document.getElementsByClassName("lights");
var changeLight = function (light) {

    if (light === "greenArrow") {
        document.getElementById("green").style.display = "none";
        document.getElementById("greenArrow").style.display = "inline-block";
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