const quizData = [
{
    question: "What is the DOM stand for ?",
    options :[  
        "Document Order Model", 
        "Document Object Model",
        "Data Object Model",
        "Diret Object Model"
    ],
    correct : 1
}
,
{
    queastion: "which model is selects by ID ?",
    options:[
        "getElementById()",
        "querySelectorALL()",
        "getElementsByTagName()",
        "getElementsByClassName()"
    ]
    , correct : 0
}
,
{
question : "Which input fire input change ?",
options:["click", "submit", "change", "keyup"],
correct : 2
},

{
    question: "Which is the odd number ?",
    options: [1, 3,, 7, 10],
    correct : 3
}
];



let questions = [...quizData].sort(()=>Math.random()-0.5);
let currentQuestion = 0;

const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion()
{

    const q = questions[currentQuestion];
    console.log(q);
    questionEl.textContent =  `Question ${currentQuestion+1}: ${q.question} `
    q.options.forEach((option, index)=>{
     const btn = document.createElement("button");
     btn.classList.add("option-btn");
     btn.textContent =option;
     optionsEl.append(btn);
    });

nextBtn.style.display = "none";



}
loadQuestion();

