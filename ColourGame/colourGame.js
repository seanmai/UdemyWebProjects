var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");   //getElementByID doesn't need #
var messageDisplay = document.getElementById("messageDisplay"); //querySelector needs #
var header = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  modeButtonSetup();
  squaresSetup();
  reset();
}

function modeButtonSetup(){
  //Mode Buttons event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selectedMode");
      modeButtons[1].classList.remove("selectedMode");
      this.classList.add("selectedMode");

      this.textContent === "Easy" ? numSquares = 3: numSquares = 6; //Turnary operator, does exact same as below if statement
      // if (this.textContent === "Easy") {
      //   numSquares = 3;
      // } else {
      //   numSquares = 6;
      // }
      reset();
    })
  }
}

function squaresSetup(){
  for (var i = 0; i < squares.length; i++) {
    //Add click listeners to squares
    squares[i].addEventListener("click", function(){
      //Grab colours of squares
      var clickedColour = this.style.backgroundColor;
      //Compare clicked colour to picked colour
      if (clickedColour === pickedColour) {
        messageDisplay.textContent = "Correct!"
        resetButton.textContent = "Play Again?"
        changeColours(clickedColour)
        header.style.backgroundColor = clickedColour;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset(){
  colours = generateSquares(numSquares );
  //Pick a new colour from random array
  pickedColour = pickSquare();
  //Change colourDisplay to match pickedColour
  colourDisplay.textContent = pickedColour;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colours"
  //Change colour of squares
  for (var i = 0; i < squares.length; i++) {
    if (colours[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colours[i]
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.backgroundColor = colours[i];
  }
  header.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColours(colour){
  //Loops through squares array and changes their colour
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colour;
  }
}

function pickSquare(){
  var random = Math.floor(Math.random() * colours.length);
  return colours[random];
}

function generateSquares(num){
  //Create array
  var arr = [];
  //Repeat num times
  for (var i = 0; i < num; i++) {
    //Get random colour to push into arr
    arr.push(randomColour());
  }
  return arr;
}

function randomColour(){
  //Random rgb from 0-255
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
