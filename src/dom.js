import { X_CLASS, CIRCLE_CLASS, board, circleTurn } from './data.js';

export function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}

export function setBoardHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS);
    } else {
        board.classList.add(X_CLASS);
    }
}