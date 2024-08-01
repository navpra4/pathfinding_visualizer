import { MAX_COLS, MAX_ROWS } from "./constants"
import { GridType, TileType } from "./types"

export const createRow = (row: number, startTile: TileType, endTile: TileType)=>{
    const currentRow = [];
    for( let col=0;col<MAX_COLS;col++){
        currentRow.push({
            row,
            col,
            isStart: row == startTile.row && col==startTile.col,
            isEnd: row == endTile.row && col==endTile.col,
            isPath: false,
            isTraversed: false,
            parent: null,
            distance: Infinity,
            isWall: false,
        })
    }
    return currentRow;
}

export const createGrid = (startTile: TileType, endTile: TileType)=>{
    const grid: GridType = []

    for (let row = 0; row < MAX_ROWS; row++) {
        grid.push(createRow(row, startTile, endTile))
    }

    return grid;
}

export const CheckIfStartOrEnd = (row:number,col:number)=>{
    return (row===1 && col===1) || (row===MAX_ROWS-2 && col===MAX_COLS-2)
}

export const createNewGrid = (grid: GridType, row: number, col: number)=>{
    const newGrid = grid.slice();
    const newTile = {
        ...grid[row][col],
        isWall: !grid[row][col].isWall,
    }
    newGrid[row][col] = newTile
    return newGrid;
}

export const isEqual = (a: TileType, b:TileType)=>{
    return (a.row===b.row) && (a.col===b.col);
}
export const isRowColEqual = (row: number,col: number, b:TileType)=>{
    return (row===b.row) && (col===b.col);
}
export const sleep = (ms: number)=>{
    return new Promise((resolve)=> setTimeout(resolve,ms))
}

export const getRandInt = (min: number, max: number)=>{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min) + min);
}