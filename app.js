const container = document.querySelector('#page-container');
const gridSize = document.querySelector('#gridSizeInput');

// Create default grid fragment
const frag = document.createDocumentFragment('div');

const defaultGridSize = 16;
for (let i = 0; i < defaultGridSize; i++) { //create grid rows
    const newColumn = document.createElement('div');
    newColumn.classList.add('default');
    newColumn.style.height = `${Math.floor(800 / defaultGridSize)}px`;
    for (let j = 0; j < defaultGridSize; j++) { // populate with grid squares
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.style.width = `${Math.floor(800 / defaultGridSize)}px`;
        newSquare.style.height = `${Math.floor(800 / defaultGridSize)}px`;
        newColumn.appendChild(newSquare); //append square to column
    }
    frag.appendChild(newColumn); // append column to document fragment.
}

container.appendChild(frag); // append fragment to document.

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
            newSquare.style.minWidth = `${Math.floor(800 / size)}px`;
            newSquare.style.minHeight = `${Math.floor(800 / size)}px`;
            newColumn.appendChild(newSquare);
        }
        fragment.appendChild(newColumn);
    }
    destination.appendChild(fragment);
}

gridSize.addEventListener('submit', (e) => {
    e.preventDefault();
    let size = e.target[0].valueAsNumber;
    console.log(e)
    console.log(size, frag, container);
    createGrid(size, frag, container);
    gridSize.reset();
})
