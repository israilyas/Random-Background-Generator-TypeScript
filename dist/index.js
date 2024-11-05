"use strict";
const startB = document.getElementById('start');
const stopB = document.getElementById('stop');
let intervalId;
const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
console.log(randomColor());
const startChangingBG = function () {
    if (!intervalId) {
        intervalId = setInterval(BGColor, 1000);
    }
    function BGColor() {
        const body = document.querySelector('body');
        body.style.backgroundColor = randomColor();
    }
};
// Stop Changing BG Color
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};
// Event Listener
startB.addEventListener('click', startChangingBG);
stopB.addEventListener('click', stopChangingColor);
