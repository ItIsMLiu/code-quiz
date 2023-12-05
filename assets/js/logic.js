// Access start quiz button HTML element
let startQuizBtn = document.getElementById("start");

let startScreenEl = document.getElementById("start-screen");
let questionsEl = document.getElementById("questions");
let questionTitleEl = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");
let endScreenEl = document.getElementById("end-screen");

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

function countdown() {
    // Select time span element by ID
    let timerEl = document.querySelector("#time");
    let secondsLeft = 75;
    
    let timeInterval = setInterval(function() {
        if (secondsLeft > 0) {
            // Set the `textContent` of `timerEl` to show the time left
            timerEl.textContent = secondsLeft;
            // Decrement `secondsLeft` by 1
            secondsLeft--;
        } else if (secondsLeft === 0) {
            timerEl.textContent = secondsLeft;
            questionsEl.style.display = 'none';
            endScreenEl.style.display = 'block';
        }
    }, 1000);   
}

function newQuestion() {
    for (var i=0; i<questionsArray.length; i++) {
        li1Btn.textContent = questionsArray[i].answerOptions[0];
        li2Btn.textContent = questionsArray[i].answerOptions[1];
        li3Btn.textContent = questionsArray[i].answerOptions[2];
        li4Btn.textContent = questionsArray[i].answerOptions[3];
        questionTitleEl.textContent = questionsArray[i].ask;
    }

}

// Listen for a click event on start quiz button
startQuizBtn.addEventListener("click", function() {
    //start timer
    countdown();
    
    //hide start-screen <div> and unhide questions <div>
    startScreenEl.style.display = 'none';
    questionsEl.style.display = 'block';

    newQuestion(questionsArray);
})

li1Btn.addEventListener("click", function() {
    listEl.textContent = " ";
    questionTitleEl.textContent = " ";
})













/*
// Access start quiz button HTML element
let startQuizBtn = document.getElementById("start");

let startScreenEl = document.getElementById("start-screen");
let questionsEl = document.getElementById("questions");
let questionTitleEl = document.getElementById("question-title");
let choicesEl = document.getElementById("choices");
let endScreenEl = document.getElementById("end-screen");

function countdown() {
    // Select time span element by ID
    let timerEl = document.querySelector("#time");
    let secondsLeft = 75;
    
    let timeInterval = setInterval(function() {
        if (secondsLeft >= 1) {
            // Set the `textContent` of `timerEl` to show the time left
            timerEl.textContent = secondsLeft;
            // Decrement `secondsLeft` by 1
            secondsLeft--;
        } else if (secondsLeft === 0) {
            questionsEl.style.display = 'none';
            endScreenEl.style.display = 'block';
        }
    }, 1000);   
}

// Listen for a click event on start quiz button
startQuizBtn.addEventListener("click", function() {
    //start timer
    countdown();
    //hide start-screen <div> and unhide questions <div>
    startScreenEl.style.display = 'none';
    questionsEl.style.display = 'block';

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

    li1Btn.textContent = questionsArray[0].answerOptions[0];
    li2Btn.textContent = questionsArray[0].answerOptions[1];
    li3Btn.textContent = questionsArray[0].answerOptions[2];
    li4Btn.textContent = questionsArray[0].answerOptions[3];
    questionTitleEl.textContent = questionsArray[0].ask;
})

li1Btn.addEventListener("click", function() {
    listEl.textContent = " ";
    questionTitleEl.textContent = " ";
})
*/