import {
    X_CLASS,
    CIRCLE_CLASS,
    circleTurn,
    swapTurns,
    winningMessageElement,
    winningMessageTextElement,
} from '../data.js';
import { placeMark, setBoardHoverClass } from '../dom.js';
import { checkWin } from '../components/checkWins.js';
import { isDraw } from '../utils/isDraw.js';

export function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapTurns();
        setBoardHoverClass();
    }
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${
            circleTurn ? "O's" : "X's"
        } Wins!`;
    }
    winningMessageElement.classList.add('show');
}