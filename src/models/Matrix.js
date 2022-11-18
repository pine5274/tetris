import Constants from "../Constants";

const { GAME_HEIGHT, GAME_WIDTH } = Constants;

export function buildMatrix() {
    const column = [...Array(GAME_HEIGHT)].map(x => null);;
    const matrix = column.map(() => {
        return buildRow();
    });
    return matrix;
}

function buildRow() {
    return [...Array(GAME_WIDTH)].map(x => null);
}