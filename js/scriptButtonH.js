const quizData = [
  {
    question: "O que significa HTML?",
    options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Multi Language"],
    answer: "Hypertext Markup Language"
  },
  {
    question: "Qual tag é usada para criar um link em HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Qual tag é usada para inserir uma quebra de linha em HTML?",
    options: ["<br>", "<lb>", "<break>", "<nl>"],
    answer: "<br>"
  },
  {
    question: "Em qual elemento HTML você coloca o código JavaScript?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: "<script>"
  },
  {
    question: "Qual é a tag usada para criar um cabeçalho de primeiro nível em HTML?",
    options: ["<heading>", "<h1>", "<h>", "<header>"],
    answer: "<h1>"
  },
  {
    question: "Qual é a tag usada para criar uma lista ordenada em HTML?",
    options: ["<ol>", "<ul>", "<li>", "<list>"],
    answer: "<ol>"
  },
  {
    question: "Qual atributo é usado para especificar a URL de destino de um link em HTML?",
    options: ["href", "url", "link", "src"],
    answer: "href"
  },
  {
    question: "Qual é a tag usada para inserir uma imagem em HTML?",
    options: ["<image>", "<picture>", "<img>", "<photo>"],
    answer: "<img>"
  },
  {
    question: "Qual é a tag usada para criar um link para um arquivo CSS externo?",
    options: ["<style>", "<link>", "<css>", "<stylesheet>"],
    answer: "<link>"
  },
  {
    question: "Em HTML, qual é a tag usada para criar um campo de entrada de texto?",
    options: ["<input>", "<text>", "<field>", "<textbox>"],
    answer: "<input>"
  }
];
  const questionElement = document.getElementById("question");
  const option1Element = document.getElementById("option1");
  const option2Element = document.getElementById("option2");
  const option3Element = document.getElementById("option3");
  const option4Element = document.getElementById("option4");
  const feedbackElement = document.getElementById("feedback");

  let currentQuestionIndex = 0;
  let acertos = 0;

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
      acertos++;
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