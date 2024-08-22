export const col = 10;
export const ligne = 20;
export const EMPTY = ' ';
export const BLOCK = '#';

export let board = Array.from({ length: ligne }, () => Array(col).fill(EMPTY));

export function drawBoard() {
  console.clear();
  board.forEach(row => console.log(row.join('')));
}

export function clearBoard() {
  board = Array.from({ length: ligne }, () => Array(col).fill(EMPTY));
}

export function isRowFull(row) {
  return row.every(cell => cell === BLOCK);
}

export function removeFullRows() {
  board = board.filter(row => !isRowFull(row));
  while (board.length < ligne) {
    board.unshift(Array(col).fill(EMPTY));
  }
}
