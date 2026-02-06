function dropPiece(colIndex) {
    // colIndex er kolonna - board er brettet. Se om det er tomt nederst i kollona.
    // Hvordan få tak i rowww? Board er bare et endimesjonalt array ikke et nested :(

    console.log(colIndex, " <- colIndex")
    console.log(rowCount, " rwocount")

    let bottomRowI = getIndex(colIndex)
    //(rowCount - 1) * colCount + colIndex;  //matteeee ughhhh
    let brikke = board[bottomRowI];
    console.log(brikke, " <-- er det brikke nederst i current colonne? plx funkkkk")



}


//dra ut indexfinning i egen funkis, så det er lettere å skjønne for meg selv haha
function getIndex(colIndex) {
    return (rowCount - 1) * colCount + colIndex;
}
