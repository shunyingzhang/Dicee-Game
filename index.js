var number1 = Math.floor(Math.random() * 6) + 1;
var Image1Source = "images/dice" + number1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", Image1Source)

var number2 = Math.floor(Math.random() * 6) + 1;
var Image2Source = "images/dice" + number2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", Image2Source);

if (number1 > number2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if (number1 < number2) {
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}