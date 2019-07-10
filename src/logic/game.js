import minesweeper from "minesweeper";

export const genBoard = ({ rows = 10, cols = 10, mines = 15 } = {}) => new minesweeper.Board(minesweeper.generateMineArray({
    rows,
    cols,
    mines
}));