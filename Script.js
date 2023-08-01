const quizData=[
    {
        question:"Which one is related to front-end from given below?",
        a:"JavaSript",
        b:"HTML",
        c:"CSS",
        d:"All of the above",
        correct:"d", 
    },

    {
        question:"What is Position for child-class in CSS?",
        a:"Position:Fixed",
        b:"Position:Relative",
        c:"Position:Sticky",
        d:"Position:Absolute",
        correct:"d",    
    },

    {
        question:"Which link to a bookmark is added in an attribute named below?",
        a:"href",
        b:"link",
        c:"src",
        d:"rel",
        correct:"a",
    },

    {
        question:"Adding the style attributes in HTML elements is known to be?",
        a:"External",
        b:"Internal",
        c:"Inline",
        d:"outline",
        correct:"b",
    },

    {
        question:"A TARGET value that is used when a webpage is locked in a frame, is?",
        a:"_self",
        b:"_top",
        c:"_parent",
        d:"_blank",
        correct:"a",
    },

    {
        question:" Which of the following keywords is used to define a variable in Javascript?",
        a:"let",
        b:"const",
        c:"var",
        d:"None of the above",
        correct:"c",
    },

    {
        question:"Which of these tags are all <table> tags?",
        a:"<table><head><tfoot>",
        b:"<table><tr><td>",
        c:"<table><tr><tt>",
        d:"<thead><body><tr>",
        correct:"b",
    },

    {
        question:"Who is the father of CSS?",
        a:"Brendan Eich",
        b:"stack",
        c:" Tim Berners-Lee ",
        d:"Håkon Wium Lie",
        correct:"d",
    },

    {
        question:"Who is the father of JAVASCRIPT?",
        a:"Brendan Eich",
        b:"stack",
        c:"Tim Berners-Lee ",
        d:"Håkon Wium Lie",
        correct:"a",
    },

    {
        question:"Who is the father of HTML?",
        a:"Brendan Eich",
        b:"stack",
        c:"Tim Berners-Lee ",
        d:"Håkon Wium Lie",
        correct:"c",
    },

    {
        question:"Which of the following is true about links by default?",
        a:"An unvisited link is underlined and blue",
        b:"All of these",
        c:"An active link is underlined and purple",
        d:" A visited link is underlined and red",
        correct:"a",
    },


    {
        question:"Which of the following JavaScript cannot do?",
        a:" JavaScript can react to events",
        b:"JavaScript can manipulate HTML elements",
        c:"JavaScript can be use to validate data",
        d:" All of the Above",
        correct:"d",
    },
];


const quizContainer = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");
const reloadBtn = document.createElement("button");
reloadBtn.innerText = "Reload";
reloadBtn.style.display = "none"; // Hide the reload button initially

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer = "";

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions correctly</h2>`;
      quizContainer.appendChild(reloadBtn); // Add the reload button to the quiz container
      reloadBtn.style.display = "block"; // Show the reload button after the quiz is completed
      submitBtn.style.display = "none"; // Hide the submit button after the quiz is completed
    }
  }
});

reloadBtn.addEventListener("click", () => {
  // Reload the page when the reload button is clicked
  location.reload();
});

// Load the first quiz question on page load
loadQuiz();
