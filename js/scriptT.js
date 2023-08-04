const perguntas = [
  ["Qual é a linguagem de marcação para estruturar páginas web?", "HTML"],
  ["Qual é a linguagem de estilização para definir o layout das páginas web?", "CSS"],
  ["Quem é o fundador da Microsoft?", "Bill Gates"],
  ["Qual é o sistema operacional da Apple?", "iOS"],
  ["O que é um URL?", "Endereço web"],
  ["Quem é o CEO do Facebook?", "Mark Zuckerberg"],
  ["O que é um algoritmo?", "Sequência de passos"],
  ["Qual é a linguagem de programação usada para desenvolver aplicativos iOS?", "Swift"],
  ["O que é o protocolo de transferência de hipertexto?", "HTTP"],
  ["Quem é o CEO da Tesla?", "Elon Musk"],
  ["O que é a tecnologia de nuvem?", "Armazenamento online"],
  ["Qual é o navegador de internet desenvolvido pela Google?", "Chrome"],
  ["O que é um sistema operacional de código aberto?", "Linux"],
  ["Quem é a fundadora do Code.org?", "Hadi Partovi"],
  ["O que é o serviço de streaming de vídeo da Amazon?", "Prime Video"],
  ["Quem co-fundou a Apple com Steve Jobs?", "Steve Wozniak"],
  ["O que significa a sigla CSS?", "Cascading Style Sheets"],
  ["Qual é a tecnologia de armazenamento de dados que usa ímãs?", "Disco rígido (HDD)"],
  ["Quem é o fundador da Amazon?", "Jeff Bezos"],
  ["O que é um bot?", "Programa automatizado"],
  ];
  

  let perguntasSelecionadas = [];

  // Função para selecionar 10 perguntas aleatórias
  function selecionarPerguntasAleatorias(lista, quantidade) {
    const perguntasSelecionadas = [];
    while (perguntasSelecionadas.length < quantidade) {
      const indiceAleatorio = Math.floor(Math.random() * lista.length);
      const perguntaSelecionada = lista[indiceAleatorio];
  
      if (!perguntasSelecionadas.includes(perguntaSelecionada)) {
        perguntasSelecionadas.push(perguntaSelecionada);
      }
    }
    return perguntasSelecionadas;
  }
  
  // Pegar a referência para o elemento de resposta e o botão
  const inputResposta = document.getElementById("resposta");
  const buttonResponder = document.querySelector("button");
  const div = document.getElementById("perg");
  
  // Chamar a função para selecionar 10 perguntas aleatórias
  perguntasSelecionadas = selecionarPerguntasAleatorias(perguntas, 10);

  pegarEExibirItem(); 

  function pegarEExibirItem() {
    if (perguntasSelecionadas.length === 0) {
      alert("Você respondeu todas as perguntas!");
      return;
    }
  
    // Pegar o primeiro item da lista usando o método splice()
    const itemPegado = perguntasSelecionadas[0];
  
    // Exibir o item pegado em uma <div>
    div.textContent = itemPegado[0];
  }
  
  function checar() {
    const respostaUsuario = inputResposta.value.toLowerCase().trim();
    const respostaCorreta = perguntasSelecionadas[0][1].toLowerCase();
    const resultado = document.getElementById("chec")
    


    if (respostaUsuario === respostaCorreta) {
      resultado.textContent = 'Resposta correta!';
    } else {
      resultado.textContent = 'Resposta incorreta. Tente novamente.';
    }
  };

  function prox(){
    perguntasSelecionadas.shift();
    pegarEExibirItem(); 
    document.getElementById("chec").innerHTML = "  ";
    document.getElementById("resposta").value = "";
  }