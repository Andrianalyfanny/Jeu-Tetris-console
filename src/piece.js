class Piece{

    constructor(type){
            this.type = type;
            this.forme = this.getForme();
            this.x =0 ;
            this.y =0;
            this.rotation =0;
            
    }

    getForme(){
        const formes ={
            
                I: [
                    [1,1,1,1]
                ],
                O: [
                    [1,1],
                    [1,1]
                    ],
                T :[
                    [0,1,0],
                    [1,1,1]
                ],
                S : [
                    [0,1,1],
                    [1,1,0]
                ],
                Z : [
                    [1,1,0],
                    [0,1,1]
                ],
                L: [
                    [1,0,0],
                    [1,1,1]
                ],
                J: [
                    [0,0,1],
                    [1,1,1]
                ]

        }
    }

    rotation (){

        I :[
            []
        ]

    }

}