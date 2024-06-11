// Create the grid when the document is loaded in
document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');

// This for loop creates the 16x16 format
    for(let i = 0; i < 16 * 16; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        gridContainer.appendChild(cell);
    }
})