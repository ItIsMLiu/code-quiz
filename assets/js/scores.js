let storedScores = JSON.parse(localStorage.getItem("Records"));
console.log(storedScores);
for (let i = 0; i < storedScores.length; i++) {
    let highscoresOl = document.getElementById("highscores");
    let score = storedScores[i];
    let scoreLi = document.createElement('li');
    scoreLi.textContent = score.userInitials + ': ' + score.finalScore;
    highscoresOl.appendChild(scoreLi);
}