const canvas = document.querySelector('#canvas');
let canvasHeight = 700;
let canvasWidth = 700;
let squarePerSide = 32;
let totalSquares = squarePerSide * squarePerSide;
const generateBtn = document.querySelector('#generate');
generateBtn.addEventListener('click', generateGrid); 

for ( let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    canvas.appendChild(square);
}
squareSize();
addEvent();

function generateGrid() {
    inputValue = document.querySelector('input').value
    document.querySelectorAll('.square').forEach(element => canvas.removeChild(element));
    squarePerSide = Math.floor(Math.abs(Number(inputValue)));
    if (squarePerSide > 100) squarePerSide = 100;
    let totalSquares = squarePerSide * squarePerSide; 
    for ( let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        canvas.appendChild(square);
    }
    squareSize();
    addEvent();
}

function squareSize() {
    let squareHeight = document.querySelectorAll('.square').forEach(elem => elem.style.height = `${canvasHeight/squarePerSide - 2}px`);
    let squareWidth = document.querySelectorAll('.square').forEach(elem => elem.style.width = `${canvasWidth/squarePerSide - 2}px`);
}

function addEvent() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', e => { if (e.ctrlKey) {e.target.classList.add('transform');
                                                                        } else if (e.altKey) {e.target.classList.remove('transform');}}));
    document.querySelector('button').addEventListener('click', () => squares.forEach(square => square.classList.remove('transform')));
}
//Random color
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
const randomColorBtn = document.querySelector('#random-color');
randomColorBtn.addEventListener('click', randomColorFunction);
function randomColorFunction() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', e => e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`));
}