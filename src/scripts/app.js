"use strict"
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
}
//function pour le light
function light() {
    document.body.setAttribute("data-theme", "light");
}