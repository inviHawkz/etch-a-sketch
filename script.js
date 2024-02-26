const container = document.querySelector('#container');

for ( let i = 0; i < 1024; i++) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    container.appendChild(pixel);
}

const pixelList = document.querySelectorAll('.pixel');
pixelList.forEach(pixel => pixel.addEventListener('mouseover', e => { if (e.ctrlKey) {e.target.classList.add('transform');
                                                                    } else if (e.altKey) {e.target.classList.remove('transform');}}));
document.querySelector('button').addEventListener('click', () => pixelList.forEach(pixel => pixel.classList.remove('transform')));