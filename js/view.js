function updateView() {
    const baseTxt = ' sin tur. Klikk på en brikke!';
    const gameStatus = turn == 1 ? 'Rød' + baseTxt : turn == 2 ? 'Gul' + baseTxt : 'Spiller er over!';
    document.getElementById("app").innerHTML = /*HTML*/`
        <h3>${gameStatus}</h3>
        <div id="frame">
            ${turn != 0 ? createClickablePieces(turn) : ''}
            <div id="board">
                ${createBoardCells()}
            </div>
        </div>            
    `;
}

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