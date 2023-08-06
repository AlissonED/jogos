const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

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
        mario.style.widht = '75px'


        clearInterval(loop);/** Parar de rodar o loop */        

    }


}, 10);

document.addEventListener('keydown', jump);