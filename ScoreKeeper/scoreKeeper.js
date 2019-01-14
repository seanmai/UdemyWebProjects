var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Points = document.querySelector("#p1Points");
var p2Points = document.querySelector("#p2Points");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var scoreCap = 5;
var numInput = document.querySelector("input");
var scoreCapDisplay = document.querySelector("p span"); //or use ID

p1Button.addEventListener("click", function(){
  if (!gameOver) {
    p1Score++;
    if (p1Score === scoreCap){
      p1Points.classList.add("winner");
      gameOver = true;
    }
    p1Points.textContent = (p1Score);
  }
});

p2Button.addEventListener("click", function(){
  if (!gameOver) {
    p2Score++;
    if (p2Score === scoreCap){
      p2Points.classList.add("winner");
      gameOver = true;
    }
    p2Points.textContent = (p2Score);
  }
});

resetButton.addEventListener("click", reset);

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Points.textContent = 0;
  p2Points.textContent = 0;
  p1Points.classList.remove("winner");
  p2Points.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function(){
  scoreCapDisplay.textContent = this.value;
  scoreCap = Number(numInput.value);
  reset();
});
