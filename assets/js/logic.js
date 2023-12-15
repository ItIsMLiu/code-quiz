// Start-screen Elements - Access start quiz button HTML element
let startQuizBtn = document.getElementById("start");
let startScreenEl = document.getElementById("start-screen");

// Question screen elements
let questionsEl = document.getElementById("questions");
let questionTitleEl = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");
let selectedAnswer;
let currentQuestionIndex = 0; // Keep track of the current question

// End-screen elements
let endScreenEl = document.getElementById("end-screen");
let finalScoreEl = document.getElementById("final-score");
let initialsInput = document.getElementById("initials");
let submitBtn = document.getElementById("submit");
let finalScore

// Feedback
let feedbackEl = document.getElementById("feedback");
let msgDiv = document.createElement('div');

// Create additional element in HTML.
// Create unordered list element
let listEl = document.createElement("ul");
// Create unordered list item elements
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
// Create button element for each list item element
let li1Btn = document.createElement("button");
let li2Btn = document.createElement("button");
let li3Btn = document.createElement("button");
let li4Btn = document.createElement("button");
// Append child ul to choices <div>
choicesEl.appendChild(listEl);
// Append child <li> to <ul>
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
// Append child <button> to <li>
li1.appendChild(li1Btn);
li2.appendChild(li2Btn);
li3.appendChild(li3Btn);
li4.appendChild(li4Btn);

// change multiple li elements styles
let liEl = document.querySelectorAll("li");
for (let i=0; i<liEl.length; i++) {
    liEl[i].setAttribute("style", "list-style: none; background-color: transparent;");
};

// Timer section
let timeInterval;
let timerEl = document.querySelector("#time"); // Select time span element by ID
let secondsLeft = 75;

// Highscores page element
let scoresRecords = [];

function countdown() {
    timeInterval = setInterval(function() {
        if (secondsLeft > 0) {
            // Set the `textContent` of `timerEl` to show the time left
            timerEl.textContent = secondsLeft;
            // Decrement `secondsLeft` by 1
            secondsLeft--;
        } else {
            clearInterval(timeInterval); // Stop the timer
            timerEl.textContent = "0";
            questionsEl.style.display = 'none';
            endScreenEl.style.display = 'block';
        }
    }, 1000);
}

function newQuestion() {
    li1Btn.textContent = questionsArray[currentQuestionIndex].answerOptions[0];
    li2Btn.textContent = questionsArray[currentQuestionIndex].answerOptions[1];
    li3Btn.textContent = questionsArray[currentQuestionIndex].answerOptions[2];
    li4Btn.textContent = questionsArray[currentQuestionIndex].answerOptions[3];
    questionTitleEl.textContent = questionsArray[currentQuestionIndex].ask;
}

function displayMessage() {
    feedbackEl.style.display = 'block';
    feedbackEl.appendChild(msgDiv);
    if (selectedAnswer.charAt(0) === questionsArray[currentQuestionIndex].correctAnswer) {
        msgDiv.textContent = "Correct!";
    } else {
        msgDiv.textContent = "Wrong!";
        secondsLeft = secondsLeft - 15
    }
    setTimeout(function() {
        feedbackEl.style.display = 'none';
    }, 1000);
}

// Listen for a click event on start quiz button
startQuizBtn.addEventListener("click", function() {
    // start timer
    countdown();

    // hide start-screen <div> and unhide questions <div>
    startScreenEl.style.display = 'none';
    questionsEl.style.display = 'block';

    newQuestion();
});

listEl.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        selectedAnswer = event.target.textContent;

        displayMessage()

        // Move to the next question
        currentQuestionIndex++;
        if (currentQuestionIndex < questionsArray.length) {
            newQuestion();
        } else {
            questionsEl.style.display = 'none';
            endScreenEl.style.display = 'block';

            if (secondsLeft>0){
                finalScoreEl.textContent = secondsLeft;
                timerEl.textContent = secondsLeft
                clearInterval(timeInterval); // Stop the timer
                finalScore = secondsLeft;
            } else {
                clearInterval(timeInterval); // Stop the timer
                timerEl.textContent = "0";
                finalScoreEl.textContent = 0
                finalScore = 0;
            } 
            return finalScore;
        }
    }
});

submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    let userInitials = initialsInput.value.trim();
    
    let storedScores = JSON.parse(localStorage.getItem("Records"));
    if (storedScores !== null) {
        scoresRecords = storedScores;
    } 

    if (userInitials === ""){
        alert("Please enter your initials.");
    } else {
        scoresRecords.push({userInitials, finalScore});
        localStorage.setItem("Records", JSON.stringify(scoresRecords));
        window.location.href = "highscores.html";
    }
})