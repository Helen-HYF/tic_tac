import { X_CLASS, CIRCLE_CLASS, cellData } from '../data.js';

export function isDraw() {
    return [...cellData].every((cell) => {
        return (
            cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS)
        );
    });
}