const perguntas = [
    ["O que é uma tabela?", "Registro organizado"],
    ["Qual é o componente básico de uma tabela?", "Célula"],
    ["Como se chamam as colunas de uma tabela?", "Campos"],
    ["Como se chamam as linhas de uma tabela?", "Registros"],
    ["Qual é o símbolo usado para separar os campos de uma tabela?", "|"],
    ["O que é uma chave primária?", "Identificador único"],
    ["O que é uma chave estrangeira?", "Referência externa"],
    ["Quais são os tipos de dados comuns em uma tabela?", "Texto, número"],
    ["Como se chama a ação de organizar uma tabela em ordem crescente?", "Ordenação ascendente"],
    ["Como se chama a ação de organizar uma tabela em ordem decrescente?", "Ordenação descendente"],
    ["O que é uma consulta em uma tabela?", "Busca de dados"],
    ["O que é uma tabela de banco de dados?", "Tabela relacional"],
    ["Qual é o comando SQL para criar uma tabela?", "CREATE TABLE"],
    ["Qual é o comando SQL para inserir dados em uma tabela?", "INSERT INTO"],
    ["Qual é o comando SQL para atualizar dados em uma tabela?", "UPDATE"],
    ["Qual é o comando SQL para excluir dados de uma tabela?", "DELETE FROM"],
    ["Qual é o comando SQL para buscar dados de uma tabela?", "SELECT"],
    ["O que é uma tabela dinâmica?", "Tabela interativa"],
    ["O que é uma tabela verdade?", "Tabela de lógica"],
    ["Qual é o programa mais usado para criar tabelas?", "Excel"],
    ["O que é uma tabela periódica?", "Elementos químicos"],
    ["Qual é a ferramenta para criar tabelas no HTML?", "HTML table"],
    ["Qual é o recurso usado para estilizar tabelas no CSS?", "CSS table"],
    ["O que é uma tabela de frequências?", "Distribuição de dados"],
    ["O que é uma tabela de contingência?", "Relação entre variáveis"],
    ["Qual é o formato mais comum para exportar e importar tabelas?", "CSV"],
    ["O que é um índice em uma tabela de banco de dados?", "Aceleração de busca"],
    ["O que é uma tabela pivot?", "Tabela dinâmica"],
    ["O que é uma tabela hash?", "Estrutura de dados"],
    ["O que é uma tabela verdade AND?", "Operador lógico E"],
    ["O que é uma tabela verdade OR?", "Operador lógico OU"],
    ["O que é uma tabela verdade NOT?", "Operador lógico NÃO"],
    ["O que é uma tabela de multiplicação?", "Tabuada"],
    ["Qual é o componente de uma tabela que possui os cabeçalhos?", "Thead"],
    ["Qual é o componente de uma tabela que possui o corpo com os dados?", "Tbody"],
    ["Qual é o componente de uma tabela que possui o rodapé?", "Tfoot"],
    ["O que é um registro em uma tabela de banco de dados?", "Linha de dados"],
    ["O que é uma tabela bidimensional?", "Linhas e colunas"],
    ["O que é uma tabela unidimensional?", "Apenas linhas ou colunas"],
    ["O que é uma tabela de dupla entrada?", "Dados cruzados"],
    ["O que é uma tabela de distribuição?", "Frequências de dados"],
  
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