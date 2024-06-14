// Create the grid when the document is loaded in
document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    
    // This for loop creates the 16x16 grid format

    /* Instead of loading the grid in HTML, we run a 16*16 loop that creats a box inside
    the container each run. This will create divs each with the cell class. This will
    make the initial html document not look bloated with dividers. */  
    function createGrid(size) {
        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            gridContainer.appendChild(cell);
        }
    }
    createGrid(16);
    // Functionality that causes each block to turn black when moused over. 

    /* querySelectorAll used to apply the event listener to all boxes of the grid. 'mouseover
    is an event that causes color change to black. */

    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', function() {
            cell.style.backgroundColor = 'black';
        });
    });



    
    // Functionality to modify grid size. gridContainer.remove() to delete original grid
    let newSize;
    const sizeButton = document.getElementById('sizeBtn');
    sizeButton.addEventListener('click', () => {

        let newSize = prompt("Enter the Size");
        gridContainer.remove();
    });
});






