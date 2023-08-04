const quizData = [
  {
    question: "Qual é o nome do restaurante onde Bob Esponja trabalha?",
    options: ["Siri Cascudo", "Lula Molusco's", "Maré Mansa", "Caranguejo Burguer"],
    answer: "Siri Cascudo"
  },
  {
    question: "Qual é o melhor amigo de Bob Esponja?",
    options: ["Patrick Estrela", "Lula Molusco", "Sandy Bochechas", "Gary"],
    answer: "Patrick Estrela"
  },
  {
    question: "Como se chama o chefe do Bob Esponja?",
    options: ["Seu Siriguejo", "Senhor Sirigueijo", "Seu Caranguejo", "Senhor Caranguejo"],
    answer: "Seu Siriguejo"
  },
  {
    question: "Qual é a cidade onde Bob Esponja e seus amigos vivem?",
    options: ["Fenda do Biquíni", "Bikini Bottom", "Biquíni Fundo", "Cidade do Mar"],
    answer: "Fenda do Biquíni"
  },
  {
    question: "Qual é o instrumento musical que Lula Molusco toca?",
    options: ["Violino", "Flauta", "Clarinete", "Piano"],
    answer: "Clarinete"
  },
  {
    question: "O que Bob Esponja tem como animal de estimação?",
    options: ["Caranguejo", "Siri", "Polvo", "Lesma"],
    answer: "Lesma"
  },
  {
    question: "Qual é a ocupação da Sandy Bochechas?",
    options: ["Estrela do Mar", "Esquilo", "Peixe", "Arenque"],
    answer: "Esquilo"
  },
  {
    question: "Qual é o nome do vilão que vive em uma redoma e quer roubar a fórmula secreta do hambúrguer de siri?",
    options: ["Plankton", "Krabs", "Sr. Siriguejo", "Lula Molusco"],
    answer: "Plankton"
  },
  {
    question: "Como é o chefe do Bob Esponja na versão original em inglês?",
    options: ["Mr. Crab", "Mr. Krab", "Mr. Crabs", "Mr. Crustacean"],
    answer: "Mr. Krab"
  },
  {
    question: "Qual é o hobbie de Lula Molusco?",
    options: ["Pintar quadros", "Ler poesias", "Tocar bateria", "Nenhum"],
    answer: "Tocar bateria"
  }
];
  const questionElement = document.getElementById("question");
  const option1Element = document.getElementById("option1");
  const option2Element = document.getElementById("option2");
  const option3Element = document.getElementById("option3");
  const option4Element = document.getElementById("option4");
  const feedbackElement = document.getElementById("feedback");

  let currentQuestionIndex = 0;

  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    option1Element.textContent = currentQuestion.options[0];
    option2Element.textContent = currentQuestion.options[1];
    option3Element.textContent = currentQuestion.options[2];
    option4Element.textContent = currentQuestion.options[3];
  }

  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const userAnswer = currentQuestion.options[selectedOption];
    if (userAnswer === currentQuestion.answer) {
      feedbackElement.textContent = "Resposta correta!";
    } else {
      feedbackElement.textContent = "Resposta incorreta.";
    }
    // Incrementa para a próxima pergunta
    currentQuestionIndex++;
    // Aguarda 1 segundo antes de carregar a próxima pergunta
    setTimeout(loadNextQuestion, 1000);
  }

  function loadNextQuestion() {
    feedbackElement.textContent = "";
    // Verifica se ainda há perguntas a serem exibidas
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      questionElement.textContent = "Parabéns, você completou o quiz!";
      option1Element.style.display = "none";
      option2Element.style.display = "none";
      option3Element.style.display = "none";
      option4Element.style.display = "none";
    }
  }

  // Carrega a primeira pergunta
  loadQuestion();

  // Adiciona os eventos de clique para verificar as respostas
  option1Element.addEventListener("click", function () {
    checkAnswer(0);
  });
  option2Element.addEventListener("click", function () {
    checkAnswer(1);
  });
  option3Element.addEventListener("click", function () {
    checkAnswer(2);
  });
  option4Element.addEventListener("click", function () {
    checkAnswer(3);
  });