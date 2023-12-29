"use strict";
var sec_toss = document.querySelector('#toss');
var sec_dice = document.querySelector('#dice');
function load(kya) {
    window.location.href = kya;
}
sec_toss === null || sec_toss === void 0 ? void 0 : sec_toss.addEventListener('click', function () { return load("toss.html"); });
sec_dice === null || sec_dice === void 0 ? void 0 : sec_dice.addEventListener('click', function () { return load("dice.html"); });
