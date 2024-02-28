const canvas = document.querySelector('#canvas');
let canvasHeight = 700;
let canvasWidth = 700;
let squarePerSide = 32;
let totalSquares = squarePerSide * squarePerSide;
document.querySelector('#generate').addEventListener('click', generateGrid);
document.querySelector('#color-random').addEventListener('click', randomColor);
document.querySelector('#color-normal').addEventListener('click', normalColor); 

for ( let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    canvas.appendChild(square);
}
squareSize();
normalColor();

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
    normalColor();
}

function squareSize() {
    let squareHeight = document.querySelectorAll('.square').forEach(elem => elem.style.height = `${canvasHeight/squarePerSide - 2}px`);
    let squareWidth = document.querySelectorAll('.square').forEach(elem => elem.style.width = `${canvasWidth/squarePerSide - 2}px`);
}

function normalColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', e => {
        if (e.ctrlKey) e.target.style.backgroundColor = 'black';
        else if (e.altKey) e.target.style.backgroundColor = 'white';
    }));
    document.querySelector('button').addEventListener('click', () => squares.forEach(square => square.style.backgroundColor = 'white'));
}

function randomColor() {
    randomNum = () => Math.floor(Math.random() * 256);
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', e => {
        if (e.ctrlKey) e.target.style.backgroundColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
        else if (e.altKey) e.target.style.backgroundColor = 'white';
    }))
    document.querySelector('button').addEventListener('click', () => squares.forEach(square => square.style.backgroundColor = 'white'));
}