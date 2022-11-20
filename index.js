const slider = document.querySelector('.slider');
slider.addEventListener("change", createBoard);
const board = document.querySelector('.sketchboard');

function createBoard(squares) {
    let totalSquares = squares * squares;
    for(i = 0; i < totalSquares; i++) {
        let square = document.createElement('div');
        //square.classList.add('pixel');
        board.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        board.insertAdjacentElement('beforeend', square)
    }

}


createBoard(3);