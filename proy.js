const board = document.getElementById("board");

let selectedSquare = null;

const pieces = {
    r:"♜",
    n:"♞",
    b:"♝",
    q:"♛",
    k:"♚",
    p:"♟",
    R:"♖",
    N:"♘",
    B:"♗",
    Q:"♕",
    K:"♔",
    P:"♙"
};

let position = [
    ["r","n","b","q","k","b","n","r"],
    ["p","p","p","p","p","p","p","p"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["P","P","P","P","P","P","P","P"],
    ["R","N","B","Q","K","B","N","R"]
];

function drawBoard(){

    board.innerHTML = "";

    for(let row=0; row<8; row++){

        for(let col=0; col<8; col++){

            const square = document.createElement("div");

            square.classList.add("square");

            if((row + col) % 2 === 0){
                square.classList.add("white");
            }else{
                square.classList.add("black");
            }

            square.dataset.row = row;
            square.dataset.col = col;

            const piece = position[row][col];

            if(piece){
                square.textContent = pieces[piece];
            }

            square.addEventListener("click", movePiece);

            board.appendChild(square);
        }
    }
}

function movePiece(e){

    const row = parseInt(e.target.dataset.row);
    const col = parseInt(e.target.dataset.col);

    if(selectedSquare === null){

        if(position[row][col] !== ""){

            selectedSquare = {row,col};
            e.target.classList.add("selected");
        }

    }else{

        const from = selectedSquare;

        position[row][col] =
            position[from.row][from.col];

        position[from.row][from.col] = "";

        selectedSquare = null;

        drawBoard();
    }
}

drawBoard();