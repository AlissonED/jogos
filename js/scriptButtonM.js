const quizData = [
  {
    question: "Quem é o criador de Minecraft?",
    options: ["Notch", "Markus Persson", "Elon Musk", "Steve Jobs"],
    answer: "Markus Persson"
  },
  {
    question: "Em que ano Minecraft foi lançado?",
    options: ["2007", "2011", "2009", "2013"],
    answer: "2011"
  },
  {
    question: "Qual é a principal matéria-prima usada para construir ferramentas e itens em Minecraft?",
    options: ["Pedra", "Madeira", "Ferro", "Diamante"],
    answer: "Madeira"
  },
  {
    question: "Qual é o nome da dimensão alternativa em Minecraft, frequentemente associada a criaturas perigosas e recursos raros?",
    options: ["The Overworld", "The End", "The Nether", "The Aether"],
    answer: "The Nether"
  },
  {
    question: "Quais criaturas hostis aparecem somente durante a noite em Minecraft?",
    options: ["Creeper", "Zombie", "Enderman", "Skeleton"],
    answer: "Zombie"
  },
  {
    question: "Qual é a criatura mais temida em Minecraft, conhecida por sua habilidade de explodir quando se aproxima do jogador?",
    options: ["Creeper", "Ghast", "Enderman", "Blaze"],
    answer: "Creeper"
  },
  {
    question: "Como é chamada a criatura que vive no The End e é o principal inimigo final do jogo?",
    options: ["Wither", "Ender Dragon", "Giant", "Guardian"],
    answer: "Ender Dragon"
  },
  {
    question: "Em que versão de Minecraft foi introduzido o modo de jogo chamado 'Creative'?",
    options: ["1.2.5", "1.8", "1.0", "1.4.2"],
    answer: "1.0"
  },
  {
    question: "Qual é o objetivo principal do modo de jogo 'Survival' em Minecraft?",
    options: ["Construir grandes estruturas", "Explorar masmorras", "Sobreviver e coletar recursos", "Encontrar tesouros escondidos"],
    answer: "Sobreviver e coletar recursos"
  },
  {
    question: "Em qual dimensão é possível encontrar Endermen?",
    options: ["Overworld", "Nether", "End", "Aether"],
    answer: "Overworld"
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