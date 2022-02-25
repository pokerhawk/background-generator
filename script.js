var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorButton = document.getElementById("randomColorButton");

function setGradient(){
    body.style.background =
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomColorNumber(min, max){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function randomColorNumberSet(){
    color1.value = randomColorNumber()
    color2.value = randomColorNumber()
    setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColorButton.addEventListener("click", randomColorNumberSet);
body.onload(setGradient());