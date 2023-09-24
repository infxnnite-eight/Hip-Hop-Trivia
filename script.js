const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    // You can add code here to display answer buttons based on the question's answers array.
}

function selectAnswer() {
    // You can add code here to handle the user's answer selection.
}

const questions = [
    {
        question: 'What Rapper is considered the King Of The Of South ',
        answers: [
            { text: 'Gucci Mane', correct: true },
            { text: 'Denzel Curry', correct: false },
            { text: 'Andre 3000', correct: false },
            { text: 'T.I.', correct: false },
        ]
    }
];
