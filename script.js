var startButton = document.querySelector(".start-button");
var timerElement = document.querySelector(".timer-count");
var questionEl = document.querySelector("#questionEl");
var answerList = document.querySelector("#answerList");
var timer;
var timerCount;
var questionCounter = 0;


var questions = [{ 

        question: "Which one of these is NOT a primitive type",
        choices: ["boolean", "string", "number", "pizza"],
        correctAnswer: "pizza"
},
{
        question: "In HTML, an img tag if used to display...?",
        choices: ["links", "videos", "pictures", "footers"],
        correctAnswer: "pictures"
},
{
        question: "What does CSS apply to your page?",
        choices: ["storage", "style", "content", "interactivity"],
        correctAnswer: "style"
}

];



function renderFirstQuestion(){

    
    questionEl.textContent=(questions[questionCounter].question);

    
    for (var i = 0; i < questions[questionCounter].choices.length; i++)
    {
        //var liChoice = document.createElement("li");
        
        var answerButton = document.createElement("button");
        //liChoice.appendChild(liButton)
        answerButton.textContent = questions[questionCounter].choices[i];
        answerList.appendChild(answerButton);
        answerButton.addEventListener("click", checkAnswer);
    }
}

function checkAnswer(){
        var correctAnswer = questions[questionCounter].correctAnswer
        console.log(correctAnswer)

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
      
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endGame();
      }
    }, 1000);
}

  function endGame(){

    questionEl.innerHTML = "Quiz is Over!";
    answerList.innerHTML =
      "Better luck next time 👍🏼"
  }