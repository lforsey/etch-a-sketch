const container = document.querySelector('#page-container');
const gridSize = document.querySelector('#gridSizeInput');
const penStyle = document.querySelector('#penStyle');
const colorStyle = document.querySelector('#colorChoices');

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
            newColumn.appendChild(newSquare);
        }
        fragment.appendChild(newColumn);
    }
    destination.appendChild(fragment);
}

const draw = (color, mode, target) => {
    console.log(mode);
    switch (mode) {
        case ('erase'):
            target.style.opacity = 0;
            break;
        case ('fill'):
            target.style.backgroundColor = color;
            break;
    }
}

const getColor = (colorSelector) => {
    colorSelector.addEventListener('change', (e) => {
        return e.target.value;
    });
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

colorStyle.addEventListener('change', (e) => {
    console.log(e)
});

container.addEventListener('mouseover', (e) => {
    draw('black', 'fill', e.target);
});