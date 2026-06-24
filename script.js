const questions = [
  {
    question: "WHO IS YOUR FAVOURITE CHARACTER IN MARVEL CINEMATICS ?",
    options: [
      { text: "LOKI", marks: 1000 },
      { text: "iRON MAN's girlfriend in iron man 3 who is also an news reporter",   marks: 8  },
      { text: "Steve Rogers's 105 year old partner in dead bed",      marks: 5  },
      { text: "stan lee's grandson",      marks: 5  },
      { text: "Aunt May",      marks: 5  },
      { text: "Pavitra Prabhakar",      marks: 5  },
      { text: "Gwen's Grandmaa",         marks: 2  }
    ]
  },
  {
    question: "Do you like BTS  ?",
    options: [
      { text: "get a life bro , fuck of why do u need this question", marks: 10 },
      { text: "i am straight as north pole",   marks: 8  },
      { text: "i am JIN",      marks: 5  },
      { text: "fuck myself",         marks: 2  }
    ]
  },
  {
    question: "WHAT IS YOUR FAVOURITE GAME ?",
    options: [
      { text: "JUST CAUSE", marks: 10 },
      { text: "gHOST oF tsusima",   marks: 8  },
      { text: "my dead life (not a game name btw its irl)",      marks: 5  },
      { text: "i dont play games , fuck u",         marks: 2  }
    ]
  },
  {
    question: "what is your favourite food ?",
    options: [
      { text: "IDLI with nariyal ka chatni", marks: 10 },
      { text: "DAL CHAWL",   marks: 8  },
      { text: "aand bhat",      marks: 5  },
      { text: "machhi bhat",      marks: 5  },
      { text: "RASSI BEHN KI CHENNE KI DAL",      marks: 5  },
      { text: "bengali FISH",      marks: 5  },
      { text: "BOTTLE OPENER with red sauce pasta with sambhar rice",      marks: 5  },
      { text: "you ma buiiiiii",         marks: 2  }
    ]
  },
  {
    question: "who is your husbando in anime world?",
    options: [
      { text: "kisaki tetta", marks: 10 },
      { text: "hiro from darling in the franxx", marks: 10 },
      { text: "hola amigo kaise ho thik ho ?", marks: 10 },
      { text: "WHITE HAIR GUY WITH BLUE EYES (gojo saturo, alias weaker than )  ", marks: 10 },
      { text: "eren yeager's grandfather",   marks: 8  },
      { text: "chopper's godfather who is also a doctor got killed while protecting him",      marks: 5  },
      { text: "Kenny Ackerman",         marks: 2  }
    ]
  },
  {
    question: "how was your day ?",
    options: [
      { text: "Gooning all day", marks: 7 },
      { text: "Going to goon",   marks: 8  },
      { text: "Normally",      marks: 5 },
      { text: "aww this cat is so cute 🐱",         marks: 20  }
    ]
  },
  {
    question: "what is your personality like ?",
    options: [
      { text: "u think u r valorant pro but u are'nt nigga", marks: 29 },
      { text: "u think u r THE SMAXKS THE KING",   marks: 3  },
      { text: "IF u r reading this u r a loser , GO GET A LIFE",      marks: 89  },
      { text: "Shyly",         marks: 10  }
    ]
  },
];


let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("start-quiz").classList.add("hidden");
  document.getElementById("Result").classList.add("hidden");
  document.getElementById("too-high-screen").classList.add("hidden");
  document.getElementById("quiz-screen").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];

  document.getElementById("question").innerText = q.question;
  document.getElementById("currentQ").innerText =
    (currentQuestion + 1) + " of " + questions.length;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.classList.add("option-btn");
    button.onclick = function () {
      score += option.marks;
      nextQuestion();
    };
    optionsDiv.appendChild(button);
  });
}
/*function NextInQ_to_go() {
  currentQuestion++;*/

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    FinalResult();
  }
}


function FinalResult() {
  const percentage = (score / (questions.length * 10)) * 100;
  const MAX_ATTEMPTS = 1000;
  let attempts = 0;

  while (true) {
    attempts++;

    const randomNum = Math.floor(Math.random() * 10) + 1;
    const finalPercentage = percentage + randomNum;

    if (finalPercentage <= 100) {
      showResult(finalPercentage);
      break;
    } else if (finalPercentage > 1000) {
      showTooHigh();
      break;
    }

    
    if (attempts >= MAX_ATTEMPTS) {
      showTooHigh();
      break;
    }
  }
}

function showResult(percentage) {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("Result").classList.remove("hidden");

  percentage = Math.round(percentage);

  let rank = "";
  if      (percentage <= 20) rank = "NPC , get a life bro 💤";
  else if (percentage <= 40) rank = "Beginner in Gooning world";
  else if (percentage <= 60) rank = "Average Gooner But not enough to be a Sigma Gooner";
  else if (percentage <= 80) rank = "Gooner world need u bro keep gooning  ";
  else if (percentage <= 95) rank = "Your Gooning Level getting closer to THE SMAKS THE KING";
  else                       rank = "Congratulations bro you are A true disciple of THE SMAXKS THE KING";

  document.getElementById("percentage").innerText = percentage + "%";
  document.getElementById("rank").innerText = rank;
}

function showTooHigh() {
  document.getElementById("quiz-screen").classList.add("hidden");
  document.getElementById("too-high-screen").classList.remove("hidden");
}

function restartQuiz() {
  document.getElementById("Result").classList.add("hidden");
  document.getElementById("too-high-screen").classList.add("hidden");
  startQuiz();
}
