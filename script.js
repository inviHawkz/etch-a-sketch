const canvas = document.querySelector('#canvas');

for ( let i = 0; i < 1369; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    canvas.appendChild(square);
}

const pixelList = document.querySelectorAll('.square');
pixelList.forEach(square => square.addEventListener('mouseover', e => { if (e.ctrlKey) {e.target.classList.add('transform');
                                                                    } else if (e.altKey) {e.target.classList.remove('transform');}}));
document.querySelector('button').addEventListener('click', () => pixelList.forEach(square => square.classList.remove('transform')));

let canvasHeight = 666;
let canvasWidth = 666;

//canvas height: 666px
//canvas width: 666px
//square pixel: 18x18 (16x16 + 1px border each side)
//square per side: 37 (666/18)
//total square: 1369 (37*37)
