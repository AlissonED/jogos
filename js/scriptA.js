const perguntas = [
    ["Qual é o maior animal terrestre?", "Elefante africano"],
    ["Qual é o mamífero mais rápido?", "Guepardo"],
    ["Qual é o maior animal marinho?", "Baleia-azul"],
    ["Qual é o animal símbolo da Austrália?", "Canguru"],
    ["Qual é o animal símbolo dos Estados Unidos?", "Águia-careca"],
    ["Qual é o animal mais rápido do mundo?", "Falcão-peregrino"],
    ["Qual é o animal que voa mais alto?", "Abutre"],
    ["Qual é o maior felino do mundo?", "Tigre siberiano"],
    ["Qual é o animal conhecido como o rei da selva?", "Leão"],
    ["Qual é o animal que vive mais tempo?", "Tartaruga"],
    ["Qual é o animal mais pesado do mundo?", "Baleia-azul"],
    ["Qual é o animal que hiberna no inverno?", "Urso"],
    ["Qual é o animal que é conhecido como o melhor amigo do homem?", "Cachorro"],
    ["Qual é o animal que não pode pular?", "Elefante"],
    ["Qual é o animal que não pode nadar?", "Girafa"],
    ["Qual é o animal que só come bambu?", "Panda"],
    ["Qual é o animal que tem listras pretas e brancas?", "Zebra"],
    ["Qual é o animal que tem uma longa tromba?", "Elefante"],
    ["Qual é o animal que tem uma crina?", "Leão"],
    ["Qual é o animal que tem uma bolsa marsupial?", "Canguru"],
    ["Qual é o animal que se camufla mudando de cor?", "Camaleão"],
    ["Qual é o animal que se alimenta de plâncton?", "Baleia"],
    ["Qual é o animal que tem asas e voa à noite?", "Coruja"],
    ["Qual é o animal que não tem vértebras?", "Inseto"],
    ["Qual é o animal que é símbolo do Brasil?", "Arara"],
    ["Qual é o animal que é considerado o mais inteligente?", "Golfinho"],
    ["Qual é o animal que tem uma bolsa na barriga para carregar seus filhotes?", "Canguru"],
    ["Qual é o animal que tem um pescoço longo?", "Girafa"],
    ["Qual é o animal que é o rei dos répteis?", "Jacaré"],
    ["Qual é o animal que é conhecido como o tigre da água?", "Crocodilo"],
    ["Qual é o animal que tem espinhos no corpo?", "Porco-espinho"],
    ["Qual é o animal que tem olhos grandes e arredondados?", "Coruja"],
    ["Qual é o animal que tem uma carapaça?", "Tartaruga"],
    ["Qual é o animal que vive na água doce e na salgada?", "Peixe"],
    ["Qual é o animal que tem um pescoço flexível?", "Cisne"],
    ["Qual é o animal que tem um rabo comprido e peludo?", "Macaco"],
    ["Qual é o animal que é símbolo da China?", "Panda"],
    ["Qual é o animal que tem uma juba?", "Leão"],
    ["Qual é o animal que é conhecido como o símbolo da sabedoria?", "Coruja"],
    ["Qual é o animal que tem escamas?", "Peixe"],
    ["Qual é o animal que voa longas distâncias?", "Andorinha"],
    ["Qual é o animal que é conhecido como o rei dos mares?", "Tubarão"],
    ];
    
  
    let perguntasSelecionadas = [];
    var bt1 = document.getElementById("bt1");
    var bt2 = document.getElementById("bt2");
    var perg = document.getElementById("perg");
    var paragrafo = document.getElementById("final");
    var chec = document.getElementById("chec");
    var resp = document.getElementById("resposta");
    var btn = document.getElementById("jorge");


  
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

        bt1.style.display = "none";
        bt2.style.display = "none";
        perg.style.display = "none";
        chec.style.display = "none";
        resp.style.display = "none";

        btn.style.display = "block";

        paragrafo.textContent = "Parabens você terminou o quiz";
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