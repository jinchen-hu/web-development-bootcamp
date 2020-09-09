var numOfSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy"
                ? (numOfSquares = 3)
                : (numOfSquares = 6);
            reset();
        });
    }
}

function setUpSquares() {
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to squres
        squares[i].addEventListener("click", function () {
            // grab color of clicked squre
            var clickedColor = this.style.backgroundColor;
            //compare color to picked colre
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                h1.style.background = clickedColor;
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    // generate all new colors
    colors = generalRandomColors(numOfSquares);
    // pick a new random color form array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    // change colors of squres
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    // change the background color
    h1.style.backgroundColor = "steelblue";
}

// easyButton.addEventListener("click", function () {
//     this.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numOfSquares = 3;
//     colors = generalRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardButton.addEventListener("click", function () {
//     this.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numOfSquares = 6;
//     colors = generalRandomColors(numOfSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // interger between 0 to 5
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generalRandomColors(num) {
    // make an array
    var arr = [];
    // add num to array
    for (let i = 0; i < num; i++) {
        // get random color and push it into the array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    // red: 0 - 255
    var r = Math.floor(Math.random() * 256);
    // green: 0 - 255
    var g = Math.floor(Math.random() * 256);
    // blue: 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
