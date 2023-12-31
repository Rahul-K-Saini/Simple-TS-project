"use strict";
function toss() {
    var button = document.querySelector('#toss_button');
    var image = document.querySelector('#coin');
    if (!button || !image) {
        console.error("Button or image not found");
        return;
    }
    var setCoinFace = function (faceNumber) {
        image.src = "./images/coin".concat(faceNumber, ".png");
    };
    setCoinFace(0);
    button.disabled = true;
    image.classList.add('animation');
    setTimeout(function () {
        image.classList.remove('animation');
        button.disabled = false;
    }, 2000);
    setTimeout(function () { return setCoinFace(Math.floor(Math.random() * 2) + 1); }, 1800);
}
