function dropPiece(colIndex) {

    for (let i = rowCount - 1; i >= 0; i--) { //telle bakover fra nederst i kolonna og oppover
        let index = getBoardIndex(colIndex, i)

        let isCellEmpty = checkIfCellEmpty(board[index]);
        if (isCellEmpty) { //om tom celle, legg inn currentplayers brikke
            //console.log(`celle på rad ${i} i kolonne ${colIndex} tom, kan plassere brikke`);
            console.log(board)
            board[index] = turn;
            console.log(board)
            if (turn == 1) {
                turn = 2
            } else { turn = 1 }
            console.log(turn)
            updateView();
            return;
        }

        //trenger å mekke en NOT A VALID MOVE om hele kolonna er full (aka er det brikke på øverste rad)

        // alert("prøve en annen kolonne, denne er full...")

    }


}

function isColFull(colIndex) {

}


//overkill med egen funksjon for en ternary? I THINK NOT
function checkIfCellEmpty(cellContent) {
    return cellContent == 0 ? true : false;
}

function hasWon() {

}
