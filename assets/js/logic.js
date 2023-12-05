// Access start quiz button HTML element
let startQuizBtn = document.getElementById("start");

let startScreenEl = document.getElementById("start-screen");
let questionsEl = document.getElementById("questions");
let questionTitleEl = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");
let endScreenEl = document.getElementById("end-screen");


// Select time span element by ID
let timerEl = document.querySelector("#time");
let secondsLeft = 76;

function setTimer() {
 let timeInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
        clearInterval(timeInterval);
        questionsEl.style.display = 'none';
        endScreenEl.style.display = 'block';
    }
 }, 1000);   
}

// Listen for a click event on start quiz button
startQuizBtn.addEventListener("click", function() {
    setTimer();
    startScreenEl.style.display = 'none';
    questionsEl.style.display = 'block';

    // Create ordered list element
    let listEl = document.createElement("ul");
    // Create ordered list items
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");

    let li1Btn = document.createElement("button");
    let li2Btn = document.createElement("button");
    let li3Btn = document.createElement("button");
    let li4Btn = document.createElement("button");

    choicesEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    li1.appendChild(li1Btn);
    li2.appendChild(li2Btn);
    li3.appendChild(li3Btn);
    li4.appendChild(li4Btn);

    // change multiple li elements styles
    let liEl = document.querySelectorAll("li");
    for (let i=0; i<liEl.length; i++) {
        liEl[i].setAttribute("style", "list-style: none; background-color: transparent;");
    };

    li1Btn.textContent = questionsArray[0].answerOptions[0];
    li2Btn.textContent = questionsArray[0].answerOptions[1];
    li3Btn.textContent = questionsArray[0].answerOptions[2];
    li4Btn.textContent = questionsArray[0].answerOptions[3];
    questionTitleEl.textContent = questionsArray[0].ask;

    
})