const perguntas = [
    ["Qual filme tem um tubarão como antagonista?", "Tubarão"],
    ["Qual filme conta a história de um jovem bruxo?", "Harry Potter"],
    ["Qual filme é conhecido pela frase 'A vida é como uma caixa de chocolates'?", "Forrest Gump"],
    ["Qual filme é sobre um naufrágio e uma ilha deserta?", "Náufrago"],
    ["Qual filme é sobre a jornada de um hobbit para destruir um anel?", "O Senhor dos Anéis"],
    ["Qual filme é sobre um robô que procura por uma planta?", "Wall-E"],
    ["Qual filme conta a história de uma sereia que sonha em ser humana?", "A Pequena Sereia"],
    ["Qual filme é sobre um cientista que cria um parque de dinossauros?", "Jurassic Park"],
    ["Qual filme é sobre um leão que é o herdeiro do trono?", "O Rei Leão"],
    ["Qual filme é sobre um homem que se torna invisível?", "O Homem Invisível"],
    ["Qual filme é sobre uma menina que cai em um mundo mágico através de um buraco de coelho?", "Alice no País das Maravilhas"],
    ["Qual filme é sobre uma fábrica de chocolates?", "A Fantástica Fábrica de Chocolates"],
    ["Qual filme é sobre um viajante do tempo que conhece sua futura esposa?", "De Volta para o Futuro"],
    ["Qual filme é sobre um ratinho que sonha em ser chef?", "Ratatouille"],
    ["Qual filme é sobre um espião britânico com licença para matar?", "007"],
    ["Qual filme é sobre uma adolescente que se apaixona por um vampiro?", "Crepúsculo"],
    ["Qual filme é sobre um ogro que vive em um pântano?", "Shrek"],
    ["Qual filme é sobre um brinquedo cowboy que tem medo de ser substituído?", "Toy Story"],
    ["Qual filme é sobre uma garota que encontra um livro mágico?", "Labirinto"],
    ["Qual filme é sobre uma equipe de super-heróis?", "Os Vingadores"],
    ["Qual filme é sobre um homem que se transforma em um monstro verde?", "O Incrível Hulk"],
    ["Qual filme é sobre um adolescente que muda de corpo com um adulto?", "Quero Ser Grande"],
    ["Qual filme é sobre um tubarão animatrônico que aterroriza uma praia?", "Tubarão"],
    ["Qual filme é sobre um robô que sonha em ser humano?", "Blade Runner"],
    ["Qual filme é sobre um assassino de aluguel que busca vingança?", "John Wick"],
    ["Qual filme é sobre uma família de super-heróis?", "Os Incríveis"],
    ["Qual filme é sobre um homem que se torna um cavaleiro medieval?", "Cavaleiro sem Cabeça"],
    ["Qual filme é sobre um advogado que defende um homem acusado de homicídio?", "Tempo de Matar"],
    ["Qual filme é sobre uma cidade assombrada por fantasmas?", "Os Caça-Fantasmas"],
    ["Qual filme é sobre um garoto que encontra um alienígena?", "E.T. - O Extraterrestre"],
    ["Qual filme é sobre um navio que naufraga no Oceano Atlântico?", "Titanic"],
    ["Qual filme é sobre uma adolescente que luta contra um governo totalitário?", "Jogos Vorazes"],
    ["Qual filme é sobre uma mulher que se apaixona por um vampiro?", "Crepúsculo"],
    ["Qual filme é sobre um grupo de amigos que viajam no tempo?", "A Máquina do Tempo"],
    ["Qual filme é sobre um peixe-palhaço que procura por seu filho?", "Procurando Nemo"],
    ["Qual filme é sobre um espião que trabalha para a agência Kingsman?", "Kingsman: Serviço Secreto"],
    ["Qual filme é sobre uma garota que entra em um concurso de beleza?", "Pequena Miss Sunshine"],
    ["Qual filme é sobre um homem que entra em um jogo de realidade virtual?", "Jogador Nº 1"],
    ["Qual filme é sobre um gênio que concede desejos a um jovem?", "Aladdin"],
    ["Qual filme é sobre um grupo de amigos que caça fantasmas?", "Os Caça-Fantasmas"],
    ["Qual filme é sobre um casal que embarca em uma aventura espacial?", "Star Wars"],
    ["Qual filme é sobre um adolescente que descobre que é um semideus?", "Percy Jackson"],
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