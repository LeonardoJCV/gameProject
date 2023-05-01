const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const score = document.querySelector('.score');
let count = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.bottom = `${cloudsPosition}px`;

        mario.src = 'mario-dead.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        alert(`GameOver! sua pontuação foi de: ${count}`);
        count = 0;

        clearInterval(loop);
    }

    count++;
    score.innerHTML = `Pontuação: ${count}`;

}, 10);

class EditorViewController: UIViewController {
    ...

    override func pressesBegan(_ presses: Set<UIPress>,
                               with event: UIPressesEvent?) {
        super.pressesBegan(presses, with: event)
        presses.first?.key.map(keyPressed)
    }

    override func pressesEnded(_ presses: Set<UIPress>,
                               with event: UIPressesEvent?) {
        super.pressesEnded(presses, with: event)
        presses.first?.key.map(keyReleased)
    }

    override func pressesCancelled(_ presses: Set<UIPress>,
                                   with event: UIPressesEvent?) {
        super.pressesCancelled(presses, with: event)
        presses.first?.key.map(keyReleased)
    }
}

document.addEventListener('keypress', jump);
