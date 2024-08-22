import { BLOCK } from './grille.js';

export const TETROMINOS = {
  I: [
    [1],
    [1],
    [1],
    [1],
  ],
  O: [
    [1,1], 
    [1,1]
  ],
  T: [
    [1,1,1],
    [0,1,0],
    [0,1,0]
    ],
  S: [
    [0,1,1], 
    [1,1,0]
  ],
  Z: [
    [1,1,0],
    [0,1,1]
  ],
  J: [
    [0,0,1],
    [0,0,1], 
    [1,1,1]
    ],
  L: [
    [1,0,0],
    [1,0,0],
    [1,1,1]
    ]
};

export function addPiece(board, tetromino, x, y) {
  tetromino.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell) {
        board[y + i][x + j] = BLOCK;
      }
    });
  });
}
