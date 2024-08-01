import { MAX_COLS, MAX_ROWS, SPEEDS } from "./constants";
import { isRowColEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";

export const createWall = (
    startTile: TileType,
    endTile: TileType,
    speed: SpeedType
)=>{
    const delay = 6* SPEEDS.find((s)=> s.value === speed)!.value - 1;

    for(let row = 0;row<MAX_ROWS; row++){
        setTimeout(()=>{
            for(let col=0;col<MAX_COLS;col++){
                if(row%2===0 || col%2===0){
                    if(!isRowColEqual(row,col,startTile) && !isRowColEqual(row,col,endTile)){
                        setTimeout(()=>{
                            document.getElementById(`${row}-${col}`)!.className = `${WALL_TILE_STYLE} animate-wall`
                        }, delay*col)
                    }
                }
            }
        }, delay*(MAX_ROWS/2)* row)
    }

}