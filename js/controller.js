function dropPiece(colIndex) {
    // colIndex er kolonna - board er brettet. Se om det er tomt nederst i kollona.
    // Hvordan få tak i rowww? Board er bare et endimesjonalt array ikke et nested :(

    //console.log(colIndex, " <- colIndex")
    //console.log(rowCount, " rwocount")

    let bottomRowI = getIndex(colIndex)
    //(rowCount - 1) * colCount + colIndex;  //matteeee ughhhh
    let cellContent = board[bottomRowI];
    //console.log(cellContent, " <-- er det brikke nederst i current colonne? plx funkkkk")


    //om IKKE cella er tom, sjekk raden ovenfor i samme kolonne - repeat til enten slutt på rader eller finner et tomrom
    //lukter loop jah :p

    for (let i = rowCount - 1; i >= 0; i--) { //telle bakover fra nederst i kolonna og oppover
        let index = i * colCount + colIndex // gange seg til riktig "rad" å starte i, gange i med colCount gir første "index" i raden. + Colindex for å starte i riktig kolonne
        //typ: " start på riktig rad (i*colCount) og gå (colIndex) antall skritt til høyre "
        //let index2 = getIndex(colIndex)
        //console.log(board[index], " test innhold på runde " + i)
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


//dra ut indexfinning i egen funkis, så det er lettere å skjønne for meg selv haha
function getIndex(colIndex) {
    return (rowCount - 1) * colCount + colIndex;
}


//overkill med egen funksjon for en ternary? I THINK NOT
function checkIfCellEmpty(cellContent) {
    return cellContent == 0 ? true : false;
}
