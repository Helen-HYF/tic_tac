export const X_CLASS = 'x';
export const CIRCLE_CLASS = 'circle';
export const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
export const cellData = document.querySelectorAll('[data-cell]');
export const board = document.getElementById('board');
export const winningMessageElement = document.getElementById('winningMessage');
export const winningMessageTextElement = document.querySelector(
    '[data-winning-message-text]',
);
export let circleTurn = false;

export function swapTurns() {
    circleTurn = !circleTurn;
}