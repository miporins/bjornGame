const bjorn = document.querySelector('.bjorn');
const pipe = document.querySelector('.pipe');

const jump = () => {
  bjorn.classList.add('jump');

  setTimeout(() => {
    bjorn.classList.remove('jump');


  }, 500);
}

const loop = setInterval(() => {
  console.log('loop');


  const pipePosition = pipe.offsetLeft;
  const bjornPosition = +window.getComputedStyle(bjorn).bottom.replace ('px', '');
  
  if (pipePosition <= 290 && pipePosition > 0 && bjornPosition < 50 ) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    bjorn.style.animation = 'none';
    bjorn.style.bottom = `${bjornPosition}`;

    bjorn.src = './imagens/game-over.png';
    bjorn.style.width = '75px';
    bjorn.style.marginLeft = '50px';

    clearInterval(loop);
  }
}, 10);

document.addEventListener('keydown', jump);