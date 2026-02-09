function dropPiece(colIndex) {

    for (let i = rowCount - 1; i >= 0; i--) { //telle bakover fra nederst i kolonna og oppover
        let index = getBoardIndex(colIndex, i)

        let isCellEmpty = checkIfCellEmpty(board[index]);
        if (isCellEmpty) { //om tom celle, legg inn currentplayers brikke
            //console.log(`celle på rad ${i} i kolonne ${colIndex} tom, kan plassere brikke`);
            //console.log(board)
            board[index] = turn;
            hasWon();
            //console.log(board)
            if (turn == 1) {
                turn = 2
            } else { turn = 1 }
            //console.log(turn)
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
    if (checkForHorizontalWin()) {
        turn = -1;
    }
}

// hvis cellContent IKKE er tom, sjekk om det er 3 like i en retning
function checkForHorizontalWin() {
    //samme row, neste kolonne
    console.log("check horizontal")
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j <= colCount - 4; j++) { //trenger ikke sjekke hele veien bortover
            let index = getBoardIndex(j, i);
            console.log("check horizontal Looop turn: ", turn)
            console.log("index innhold: ", board[index])
            if (board[index] === turn &&
                board[index + 1] === turn &&
                board[index + 2] === turn &&
                board[index + 3] === turn
            ) {
                return true;
            }
        }
    }

}


function checkForVerticalWin() {
    // samme kolonne, neste row

}


function checkForDiagonalWin() {
    //en rad ned, en kolonne til høyre
    //en rad ned, en kolonne til venstre

}
