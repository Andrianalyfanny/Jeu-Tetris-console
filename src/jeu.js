import readline from 'readline';
import { board, drawBoard, clearBoard, removeFullRows, BLOCK } from './grille.js';
import { TETROMINOS, addPiece } from './piece.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let currentPiece = getRandomPiece();
let currentX = 4, currentY = 0;
let gameInterval;

function movePiece(dx, dy) {
 // if (!checkCollision(currentX + dx, currentY + dy, currentPiece)) {
    currentX += dx;
    currentY += dy;
    updateBoard();
  /*} else if (dy > 0) {
    
    fixPiece();
    resetPiece();
  }*/
}

function checkCollision(x, y, tetromino) {
  for (let i = 0; i < tetromino.length; i++) {
    for (let j = 0; j < tetromino[i].length; j++) {
      if (tetromino[i][j]) {
        if (
          y + i >= board.length || 
          x + j < 0 ||              
          x + j >= board[0].length ||
          board[y + i][x + j] === BLOCK 
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

function fixPiece() {
  addPiece(board, currentPiece, currentX, currentY);
  removeFullRows();
}

function checkGameOver() {
  return checkCollision(currentX, currentY, currentPiece);
}

function updateBoard() {
  clearBoard();
  addPiece(board, currentPiece, currentX, currentY);
  drawBoard();
}

function resetPiece() {
  currentPiece = getRandomPiece();
  currentX = 4;
  currentY = 0;
  if (checkGameOver()) {
    console.log("Game Over!");
    clearInterval(gameInterval);
    rl.close();
  }
}

function handleInput(input) {
  switch (input) {
    case 'a':
      movePiece(-1, 0);
      break;
    case 'd':
      movePiece(1, 0); 
      break;
    case 's':
      movePiece(0, 1); 
      break;
    default:
      console.log("Commande inconnue");
  }
}

function getRandomPiece() {
  const keys = Object.keys(TETROMINOS);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return TETROMINOS[randomKey];
}

function startGameLoop() {
  gameInterval = setInterval(() => {
    movePiece(0, 1); 
  }, 1000);

  rl.on('line', handleInput);
}

clearBoard();
updateBoard();
startGameLoop();
