/**
 * Created by sam on 9/14/2015.
 */
//window.onclick = myFunction;

// If the user clicks in the window, set the background color of <body> to yellow
function myFunction() {
    document.getElementsByTagName("h1")[0].style.backgroundColor = "grey";
    turnBack();
}

function bigImg(x) {
    x.style.height = "400px";
    x.style.width = "300px";
}

function normalImg(x) {
    x.style.height = "200px";
    x.style.width = "150px";
}

function crazyColors(x) {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "lightgrey";
}

function normal(x) {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
}

function aColor() {
    document.getElementById("title").style.color = "darkgrey";
}
function anotherColor() {
    document.getElementById("title").style.color = "lightgreen";
}