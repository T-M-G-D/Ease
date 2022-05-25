"use strict"
import { gsap } from "gsap";

// Date copyright

var date = new Date();
var date = date.getFullYear();
var output = document.querySelector(".footer__output")

output.innerHTML = date;


// Darkmode
// Source : Philippe Thronte, professeur dans l'option DWT à la HEAJ

const darkTheme = document.querySelector(".darkMode");
const lightTheme = document.querySelector(".lightMode");

//Gérer le data-theme du body
darkTheme && lightTheme.addEventListener("click", function() {
    if (document.body.dataset.theme === "dark") {
        light();
        localStorage.setItem("theme", "light");

    } else {
        dark();
        localStorage.setItem("theme", "dark");

    }
});

//Est ce que l'utilisateur veut un theme dark?
const userDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//Est ce que l'utilisateur a déjà indiqué une préférence sur notre site?
let theme = localStorage.getItem('theme');
if ((!theme && userDark) || (theme === "dark")) {
    dark();
} else if (theme === "light") {
    light();
}

//function pour le dark
function dark() {
    document.body.setAttribute("data-theme", "dark");
    document.body.classList.add("dMode");
    document.body.classList.remove("lMode");
    gsap.fromTo(
        ".dMode", { opacity: 0 }, { duration: 1, opacity: 1 }
    );
}
//function pour le light
function light() {
    document.body.setAttribute("data-theme", "light");
    document.body.classList.add("lMode");
    document.body.classList.remove("dMode");
    gsap.fromTo(
        ".lMode", { opacity: 0 }, { duration: 1, opacity: 1 }
    );
}

//slider
const slider__img = document.getElementsByClassName("slider__img");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

let imgActive = 0;

let nbrImg = slider__img.length;

function changeImg() {
    for (let i = 0; i < nbrImg; i++) {
        slider__img[i].classList.remove("slider__img--active");
    }
}

next.addEventListener("click", function() {
    imgActive++;
    if (imgActive >= nbrImg) {
        imgActive = 0;
    }
    changeImg();
    slider__img[imgActive].classList.add("slider__img--active");
})

previous.addEventListener("click", function() {
    imgActive--;
    if (imgActive < 0) {
        imgActive = nbrImg - 1;
    }
    changeImg();
    slider__img[imgActive].classList.add("slider__img--active");
})