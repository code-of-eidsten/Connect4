function createClickablePieces() {
    let html = '<div id="controls" class="controls">';
    for (let colIndex = 0; colIndex < colCount; colIndex++) {
        html += /*HTML*/`
                    <button 
                        class="drop-btn p${turn}" 
                        onclick="dropPiece(${colIndex})"
                        ></button>`;
    }
    html += `</div>`;
    return html;
}


function createBoardCells() {
    let html = '';
    for (let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
        for (let colIndex = 0; colIndex < colCount; colIndex++) {
            const index = rowIndex * colCount + colIndex;
            const cellValue = board[index]; // 0 = tom, 1 = rød, 2 = gul
            html += `<div class="cell player${cellValue}"></div>`;
        }
    }
    return html;
}

