const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const castle = document.querySelector('.castelo');
pipe.addEventListener('animationiteration', contarLoop);

let numLoops = 0;
let loopCount = 47;


const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}/* função para ativar a animação do mario adicionando a classe jump ao mario e depois da execução removendo ela*/



const loop = setInterval (() =>{
    const pipePosition = pipe.offsetLeft;
    /* constante que pega a posição do cano horizontalmente */

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    /**constante que pega a posição do mario diretamente da janela remove o texto px da string e converte ela para numero com o + no inicio da geração da constante*/

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) /**checagem se o cano bateu no mario */ {

        pipe.style.animation ='none';
        pipe.style.left = `${pipePosition}px`;
        /** Parar o cano */

        mario.style.animation ='none';
        mario.style.bottom = `${marioPosition}px`;
        /** Parar o mario */


        mario.src = './img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'


        clearInterval(loop);/** Parar de rodar o loop */        

    }


}, 10);



function contarLoop()/**função para contart os loops de animação do pipe */ {
    numLoops++; // Incrementa o número de loops da animação
    document.getElementById('numLoops').textContent = `Pontos: ${numLoops}`; /**exibe a quantidade de loops */
  }

document.addEventListener('keydown', jump);



function changeAnimationDuration() {
  const currentDuration = parseFloat(getComputedStyle(pipe).animationDuration);

  if (loopCount === 49)  {
    
    /**Nova duração da animação: reduza pela metade */
    pipe.style.display = "none";
    /** Parar o cano */

    castle.style.display = "block";

    mario.classList.add('andar');
    setTimeout(() => {
      mario.style.display = "none";
    }, 6000);

    
    clearInterval(loop);/** Parar de rodar o loop */        



  }

  loopCount++;
}

  // Adicionar um ouvinte de evento para o evento "animationiteration"
  const element = document.querySelector('.pipe');
  element.addEventListener('animationiteration', changeAnimationDuration);
