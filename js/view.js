function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/`
                <div id="frame">
                    ${turn != 0 ? createClickablePieces(turn) : ''}
                    <div id="board">
                        ${createBoardCells()}
                    </div>
                    <div class="info">
                        <span>
                             ${turn == 1 ? 'Rød sin tur' :
            turn == 2 ? 'Gul sin tur' :
                'Spiller er over - rød vant!'
        }
                            </span>
                    </div>
                </div>            
            `;
}