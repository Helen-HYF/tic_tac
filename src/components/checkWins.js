import { WINNING_COMBINATIONS, cellData } from '../data.js';

export function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some((combination) => {
        return combination.every((index) => {
            return cellData[index].classList.contains(currentClass);
        });
    });
}