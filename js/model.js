// model
const colCount = 7;
const rowCount = 6;
let turn = 1; // 1 = player 1
              // 2 = player 2 
              // -1 = game over, player 1 har vunnet
let board = [
    0, 0, 0, 0, 0, 0, 0, // øverste rad
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 2, 0, 0, // nederste rad
];
