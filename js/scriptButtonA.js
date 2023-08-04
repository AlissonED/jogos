const quizData = [
    {
      question: "Qual jogo foi lançado pela Rockstar Games e se passa na cidade fictícia de Los Santos?",
      options: ["Grand Theft Auto V", "Red Dead Redemption 2", "Bioshock Infinite", "The Witcher 3: Wild Hunt"],
      answer: "Grand Theft Auto V"
    },
    {
      question: "Em qual jogo você controla um assassino que pertence à Ordem dos Assassinos?",
      options: ["Dishonored", "Assassin's Creed Odyssey", "Hitman 2", "Metal Gear Solid V: The Phantom Pain"],
      answer: "Assassin's Creed Odyssey"
    },
    {
      question: "Qual jogo é conhecido pelo seu modo Battle Royale, no qual 100 jogadores competem em uma ilha para ser o último sobrevivente?",
      options: ["Fortnite", "Overwatch", "PlayerUnknown's Battlegrounds (PUBG)", "Apex Legends"],
      answer: "PlayerUnknown's Battlegrounds (PUBG)"
    },
    {
      question: "Qual é o nome do encanador bigodudo que é o mascote da Nintendo e estrela sua própria série de jogos?",
      options: ["Sonic the Hedgehog", "Crash Bandicoot", "Mario", "Link"],
      answer: "Mario"
    },
    {
      question: "Em qual jogo de RPG você pode escolher entre as classes de guerreiro, mago e ladrão?",
      options: ["Dark Souls", "Skyrim", "Diablo III", "The Legend of Zelda: Breath of the Wild"],
      answer: "Skyrim"
    },
    {
      question: "Qual jogo de estratégia se passa em um mundo fictício chamado Azeroth, onde jogadores podem escolher entre diversas raças e classes?",
      options: ["Age of Empires II", "StarCraft II", "Warcraft III: Reign of Chaos", "League of Legends"],
      answer: "Warcraft III: Reign of Chaos"
    },
    {
      question: "Em qual jogo você pode construir e explorar mundos virtuais tridimensionais usando blocos?",
      options: ["Minecraft", "Terraria", "Roblox", "Fortnite"],
      answer: "Minecraft"
    },
    {
      question: "Qual é o nome do encanador que é rival do Mario e apareceu inicialmente no jogo Donkey Kong?",
      options: ["Luigi", "Yoshi", "Wario", "Bowser"],
      answer: "Luigi"
    },
    {
      question: "Qual é o nome do cientista e protagonista da série de jogos Half-Life?",
      options: ["Gordon Freeman", "John Marston", "Master Chief", "Samus Aran"],
      answer: "Gordon Freeman"
    },
    {
      question: "Em qual jogo de aventura e ação você controla um caçador de tesouros chamado Nathan Drake?",
      options: ["Uncharted 4: A Thief's End", "The Last of Us Part II", "God of War (2018)", "Horizon Zero Dawn"],
      answer: "Uncharted 4: A Thief's End"
    }
    // Adicione mais perguntas aqui, seguindo o mesmo padrão
  ];



  const questionElement = document.getElementById("question");
  const option1Element = document.getElementById("option1");
  const option2Element = document.getElementById("option2");
  const option3Element = document.getElementById("option3");
  const option4Element = document.getElementById("option4");
  const feedbackElement = document.getElementById("feedback");

  let currentQuestionIndex = 0;
  var acertos = 0;


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
      acertos ++;
    } else {
      feedbackElement.textContent = "Resposta incorreta.";
    }
    // Incrementa para a próxima pergunta
    currentQuestionIndex++;
    document.getElementById("score").textContent = `Acertos: ${acertos}`;
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
      console.log(acertos);
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