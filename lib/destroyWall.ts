import { split } from "postcss/lib/list";
import { SPEEDS } from "./constants";
import { sleep } from "./helpers";
import { GridType, SpeedType } from "./types";
const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const destroyWall = async (
    grid: GridType,
    row: number,
    col: number,
    isRight: number,
    speed: SpeedType
)=>{
    if(isRight && grid[row][col+1]){
        grid[row][col+1].isWall = false
        document.getElementById(`${row}-${col+1}`)!.className = TILE_STYLE
        await sleep(20*SPEEDS.find(s => s.value===speed)!.value - 5)
    }else if(grid[row+1]){
        grid[row+1][col].isWall = false
        document.getElementById(`${row}-${col}`)!.className = TILE_STYLE
        await sleep(20* SPEEDS.find(s=> s.value === speed)!.value -5)
    }else{
        grid[row][col].isWall = false
        document.getElementById(`${row}-${col}`)!.className = TILE_STYLE
        await sleep(20* SPEEDS.find(s=> s.value === speed)!.value -5)
    }
}