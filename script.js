const questions = [
    { question: "Hast du jemals in der Öffentlichkeit auf einer Bühne gesungen?", answer: false, comment: "Gut für die Menschheit und trotzdem könnte man ja... xD" },
    { question: "Magst du lieber Punk oder Rockmusik?", answer: true, comment: "Jede andere Antwort wäre auch falsch gewesen!" },
    { question: "Hast du schon einmal ein Instrument gespielt?", answer: true, comment: "Beeindruckend, oder auch nicht..." },
    { question: "Kommen Kraftklub aus Berlin?", answer: false, comment: "KARL-MARX-STADT" },
    { question: "Liebst du es, zu reisen?", answer: true, comment: "Wer nicht?" },
    { question: "Bist du ein Morgenmensch?", answer: false, comment: "Dachte ich mir!" },
    { question: "Warst du jemals vor 10 Uhr auf einem Konzert? (Festivals zählen nicht!)", answer: false, comment: "Wirklich nicht? hmmm..." },
    { question: "Hattest du jemals Lampenfieber?", answer: true, comment: "Das wird klasse" },
    { question: "Kannst du tanzen?", answer: false, comment: "Keine Sorge, ich auch nicht!" },
    { question: "Freust du dich auf die Show?", answer: true, comment: "Natürlich tust du das!" }
];

let currentQuestionIndex = 0;

function answerQuestion(answer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (answer === currentQuestion.answer) {
        document.getElementById('comment').innerText = currentQuestion.comment;
        setTimeout(() => {
            document.getElementById('comment').innerText = '';
            //showPuzzlePiece(currentQuestionIndex + 1);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                document.getElementById('showButton').style.display = 'block';
                document.querySelector('.buttons').style.display = 'none';
            }
        }, 3000);
    } else {
        document.getElementById('comment').innerText = "Falsch! Versuche es noch einmal.";
        document.getElementById('restart').style.display = 'block';
        document.querySelector('.buttons').style.display = 'none'; // Versteckt die JA- und NEIN-Buttons
    }
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.innerText = questions[currentQuestionIndex].question;
}

/*function showPuzzlePiece(pieceNumber) {
    document.getElementById(`piece${pieceNumber}`).style.opacity = 1;
}*/

function restartQuiz() {
    currentQuestionIndex = 0;
    document.getElementById('comment').innerText = '';
    document.getElementById('restart').style.display = 'none';
    document.querySelector('.buttons').style.display = 'flex'; // Zeigt die JA- und NEIN-Buttons wieder an
    document.getElementById('showButton').style.display = 'none'; // Versteckt den Show-Button
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`piece${i}`).style.opacity = 0;
    }
    showQuestion();
}

function goToShow() {
    window.location.href = 'cd.html';
}

// Initiales Laden der ersten Frage
window.onload = () => {
    showQuestion();
};