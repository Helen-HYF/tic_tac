import {
    X_CLASS,
    CIRCLE_CLASS,
    cellData,
    winningMessageElement,
} from './data.js';
import { handleClick } from './handlers/handlerClick.js';
import { setBoardHoverClass } from './dom.js';
export function startGame() {
    cellData.forEach((cell) => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener('click', handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

startGame();
const restartButton = document.getElementById('restartButton');
restartButton.addEventListener('click', startGame);
