const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue While", correct: true },
            { text: "Dog", correct: false },
            { text: "Lion", correct: false },
        ]
    },
    {
        question: "Which is smallest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue While", correct: false },
            { text: "Amiba", correct: true },
            { text: "Lion", correct: false },
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "Sahara Desert", correct: true },
            { text: "Blue While", correct: false },
            { text: "Dog", correct: false },
            { text: "Lion", correct: false },
        ]
    },
    {
        question: "Which is smallest continent in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue While", correct: false },
            { text: "Dog", correct: false },
            { text: "Australia", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    restState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function restState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){

    }
}
startQuiz();