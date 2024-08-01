import { ENDING_TILE_CONFIG, MAX_COLS, MAX_ROWS, STARTING_TILE_CONFIG } from "./constants";
import { isEqual } from "./helpers";
import { GridType, TileType } from "./types";

const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";

export const resetGrid = ({
    grid,
    startTile = STARTING_TILE_CONFIG,
    endTile = ENDING_TILE_CONFIG
}:{
    grid: GridType,
    startTile?: TileType,
    endTile?: TileType
}
)=>{
    for(let row=0;row<MAX_ROWS;row++){
        for(let col=0;col<MAX_COLS;col++){
            const tile = grid[row][col];
            tile.isPath = false;
            tile.distance = Infinity;
            tile.isTraversed = false;
            tile.isWall = false
            tile.parent = null

            if(!isEqual(tile,startTile) && !isEqual(tile,endTile)){
                const tileElement = document.getElementById(`${tile.row}-${tile.col}`);

                if(tileElement){
                    tileElement.className = TILE_STYLE;
                }

                if(tile.row === MAX_ROWS -1){
                    tileElement?.classList.add('border-b');
                }

                if(tile.col === 0){
                    tileElement?.classList.add('border-l');
                }
            }
        }
    }
}