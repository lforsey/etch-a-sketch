const container = document.querySelector('#page-container');
const gridSize = document.querySelector('#gridSizeInput');

const defaultGridSize = 16;
const frag = document.createDocumentFragment('div');

for (let i = 0; i < defaultGridSize * defaultGridSize; i++) {
    const newSquare = document.createElement('div');
    newSquare.classList.add('default');
    frag.appendChild(newSquare);
}

container.appendChild(frag);

gridSize.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.target[0].valueAsNumber);
})
