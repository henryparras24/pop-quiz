var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questionsDisplay = document.querySelector(".questions-display");
var questionEl = document.querySelector("#questionEl");
var answerList = document.querySelector("#answerList");

var isWin = false;
var timer;
var timerCount;


var questions = [{ 

        question: "Which one of these is NOT a primitive type",
        choices: ["boolean", "string", "number", "pizza"],
        correctAnswer: "pizza"
}]



function renderFirstQuestion(){

    var questionCounter = 0;
    questionEl.textContent=(questions[questionCounter].question);

    
    for (var i = 0; i < questions[questionCounter].choices.length; i++)
    {
        var liChoice = document.createElement("li");
        liChoice.textContent = questions[questionCounter].choices[i];
        answerList.appendChild(liChoice);
    }
}

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// The startGame function is called when the start button is clicked
function startGame() {
    isWin = false;
    timerCount = 30;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    renderFirstQuestion()
    startTimer()
  }

  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }