export class Grille {
    constructor(){
        this.ligne = 20;
        this.col = 10;
        this.grille = this.createGrille();
    }

    createGrille (){
        return Array.from({length: this.ligne},()=> Array(this.col).fill(0)); // cree le tableu a 2 dimensions
    }

    drawGrille(piece){

        piece.forme.forEach((row, r))

    }
}