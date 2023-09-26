const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    clearStatusClass(document.body);
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        nextButton.classList.add('hide');
    } else {
        // All questions have been answered
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answersButtonsElement.innerHTML = ''; // Clear previous answer buttons
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answersButtonsElement.children).forEach(button => {
        button.disabled = true; // Disable buttons after selecting an answer
    });

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct === 'true') {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'What Rapper is considered the King Of The South?',
        answers: [
            { text: 'Gucci Mane', correct: 'false' },
            { text: 'Denzel Curry', correct: 'false' },
            { text: 'Andre 3000', correct: 'false' },
            { text: 'T.I.', correct: 'true' },
        ]
    },
    {
        question: 'What Independent Hip-Hop Artist Sold The Most Records',
        answers: [
            { text: 'Nipsey Hussle', correct: 'false' },
            { text: 'E-40', correct: 'true' },
            { text: 'Tech N9ne', correct: 'false' },
            { text: 'MF Doom', correct: 'false' },
        ]
    },
    {
        question: 'Who was the first female Hip-Hop artist to win a Grammy?',
        answers: [
            { text: 'Cardi B', correct: 'false' },
            { text: 'Nicki Minaj', correct: 'false' },
            { text: 'Queen Latifah & Salt-N-Pepa', correct: 'true' },
            { text: 'Missy Elliott', correct: 'false' },
        ]
    },
    {
        question: 'Who Artist Duo Made The Album "Stankonia"',
        answers: [
            { text: 'Goodie Mob', correct: 'false' },
            { text: 'MF Doom', correct: 'false' },
            { text: 'OutKast', correct: 'true' },
            { text: 'Big K.R.I.T', correct: 'false' },
        ]
    }
];
