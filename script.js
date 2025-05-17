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
let score = 0;
let timer ;
let timeLeft;


const timerEl = document.getElementById("timer");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion()
{
   clearInterval(timer);
   timeLeft = 15;
   updateTimer();
   timer = setInterval(countdown, 1000);
    const q = questions[currentQuestion];
    questionEl.textContent =  `Question ${currentQuestion+1}: ${q.question} `;
    optionsEl.innerHTML = "";
    q.options.forEach((option, index)=>{
     const btn = document.createElement("button");
     btn.classList.add("option-btn");
     btn.textContent =option;
    btn.addEventListener("click", ()=>selectAnswer(index, true));
     optionsEl.append(btn);
      
    });

nextBtn.style.display = "none";


}
function countdown()
{
    timeLeft--;
    updateTimer();
    if(timeLeft== 0)
    {
        clearInterval(timer);
        selectAnswer(questions[currentQuestion]?.correct, false);
    }
}
function updateTimer()
{
    timerEl.textContent = ` ${timeLeft}`
}

function selectAnswer(index, shouldScore)
{

    const q = questions[currentQuestion];
    const buttons = document.querySelector(".option-btn");
    if(index == q.correct)
    {
       shouldScore &&  score++;
        buttons[index].classList.add("correct");
    }
    else
    {
        buttons[index].classList.add("wrong");
        buttons[q.correct].classList.add("correct");
    }
    nextBtn.style.display = "inline-block"
}

nextBtn.addEventListener("click", ()=>
{
    currentQuestion++;
    if(currentQuestion < questions.length)
    {
        loadQuestion();
    }
    else
    {
       showResult();
    }
})


function showResult()
{
    const highScore = localStorage.getItem("quizHighScore");
    const isNew = score> highScore;
    if(isNew)
    {
      localStorage.setItem("quizHighScore", score);
    }
    resultEl.innerHTML = `
    <h2> Hurry!! Quiz is finished </h2>
    <p>You have scored ${score} out of ${questions.length} questions.</P>
    <p>Highest Score: ${Math.max(score, highScore)} </p>
    ${isNew ? "<p> Hey, New High Score! </p>": ""}
    <button onclick = "location.reload()"> Restart Quiz </button>
    `
}

loadQuestion();

