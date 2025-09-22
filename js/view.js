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