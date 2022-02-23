"use strict";
setInterval(function () {
  let randomColor = Math.round(Math.random() * 16777215).toString(16);
  let RandomBacgroundColor = (document.body.style.backgroundColor =
    "#" + randomColor);
  document.body.style.transition = "background-color 1s";
  document.body.style.transitionTimingFunction = "ease-in-out";
  document.querySelector("p").innerHTML = RandomBacgroundColor;
}, 1000);
