function dropPiece(colIndex) {
    for (let i = rowCount - 1; i >= 0; i--) { //telle bakover fra nederst i kolonna og oppover
        let index = getBoardIndex(colIndex, i)

        let isCellEmpty = checkIfCellEmpty(board[index]);
        if (isCellEmpty) { //om tom celle, legg inn currentplayers brikke
            //console.log(`celle på rad ${i} i kolonne ${colIndex} tom, kan plassere brikke`);
            //console.log(board)
            board[index] = turn;
            hasWon();
            if (turn == 1) {
                turn = 2
            } else { turn = 1 }
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
    if (checkForHorizontalWin() || checkForVerticalWin() || checkForDiagonalWin()) {
        // -1 = game over, player 1 har vunnet
        // -2 = game over, player 2 har vunnet
        if (turn === 1) {
            turn = -1;
        }
        else if (turn === 2) {
            turn = -2;
        }
        updateView();
    }
}

// hvis cellContent IKKE er tom, sjekk om det er 3 like i en retning
function checkForHorizontalWin() {
    //samme row, neste kolonne

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j <= colCount - 4; j++) { //trenger ikke sjekke hele veien bortover
            let index = getBoardIndex(j, i);

            if (board[index] === turn &&
                board[index + 1] === turn &&
                board[index + 2] === turn &&
                board[index + 3] === turn
            ) {
                console.log("PLAYER WON : ", turn)
                return true;
            }
        }
    }

}


function checkForVerticalWin() {
    // samme kolonne, neste row
    for (let j = 0; j < colCount; j++) {
        for (let i = 0; i < rowCount - 3; i++) {
            let index = getBoardIndex(j, i);
            if (board[index] === turn &&
                board[index + 7] === turn &&
                board[index + 14] === turn &&
                board[index + 21] === turn
            ) {
                console.log("PLAYER WON : ", turn)
                return true;
            }
        }
    }
}


function checkForDiagonalWin() {
    //en rad ned, en kolonne til høyre
    //en rad ned, en kolonne til venstre
    for (let i = 0; i <= rowCount; i++) {
        for (let j = 0; j < colCount; j++) {
            let index = getBoardIndex(j, i);

            if (board[index] === turn &&
                board[index + 6] === turn &&
                board[index + 12] === turn &&
                board[index + 18] === turn
            ) {
                console.log("PLAYER WON: ", turn)
                return true;
            }
        }
    }
}


function checkIfBoardFull() {

}

function stopGameAfterWinOrFull() {

}

function resetBoard() {
    // har vi ikke en createBoard i common? sjekk ut hva den gjør
}
