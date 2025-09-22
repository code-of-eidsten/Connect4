// model
let turn = 1; // 1 = player 1, 2 = player 2 - 0 = game over
const colCount = 7;
const rowCount = 6;
let board = [
    0, 0, 0, 0, 0, 0, 0, // øverste rad
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 2, 0, 0, // nederste rad
];
