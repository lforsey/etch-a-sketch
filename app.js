const container = document.querySelector('#page-container');
const gridSize = document.querySelector('#gridSizeInput');


// Create default grid fragment
const frag = document.createDocumentFragment('div');

const createGrid = (size, fragment, destination) => {
    while (destination.firstChild) {
        destination.removeChild(destination.firstChild);
    }
    for (let i = 0; i < size; i++) {
        const newColumn = document.createElement('div');
        newColumn.classList.add('default');
        for (let j = 0; j < size; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.style.minWidth = `${Math.floor((window.innerHeight * 0.75) / size)}px`;
            newSquare.style.minHeight = `${Math.floor((window.innerHeight * 0.75) / size)}px`;
            newSquare.addEventListener('mouseover', (e) => {
                draw('black', 'fill', newSquare)
            });
            newColumn.appendChild(newSquare);
        }
        fragment.appendChild(newColumn);
    }
    destination.appendChild(fragment);
}

const getColor = () => {

}

const draw = (color, mode, target) => {
    if (mode === 'erase') {
        target.style.backgroundColor = 'white';
    } else if (mode === 'fill') {
        target.style.backgroundColor = color;
    }
}


// Initialize default 16*16 grid
createGrid(16, frag, container);

gridSize.addEventListener('submit', (e) => {
    e.preventDefault();
    let size = e.target[0].valueAsNumber;
    if (!size) {
        createGrid(16, frag, container);
    } else {
        createGrid(size, frag, container);
    }
    gridSize.reset();
});