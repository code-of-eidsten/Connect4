function getBoardIndex(colIndex, rowIndex) {
    if ((colIndex > 6 || colIndex < 0) || (rowIndex > 5 || rowIndex < 0)) {
        return -1;
    }
    return 1000;
}

function createBoard(value = 0) {
    return new Array(colCount * rowCount).fill(value);
}

