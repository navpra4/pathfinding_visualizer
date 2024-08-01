import { SPEEDS } from "@/lib/constants";
import { getRandInt, isEqual, sleep } from "@/lib/helpers";
import { GridType, SpeedType, TileType } from "@/lib/types";
import recursiveDivision from "./recursiveDivision";

const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";


export async function horizontalDivision(
    {
        grid,
        startTile,
        endTile,
        row,
        col,
        height,
        width,
        setIsDisabled,
        speed
    }:{
        grid: GridType,
        startTile: TileType,
        endTile: TileType,
        row: number,
        col: number,
        height: number,
        width: number,
        setIsDisabled: (isDisabled: boolean)=> void,
        speed : SpeedType
    }
) {
    const makeWallAt = row + getRandInt(0, height-1)*2 + 1
    const makePassageAt = col+ getRandInt(0, width)*2

    for( let i=0;i<2*width -1;i++){
        if(makePassageAt !== col+i){
            if(!isEqual(grid[makeWallAt][col+i], startTile) && !isEqual(grid[makeWallAt][col+i], endTile)){
                grid[makeWallAt][col+i].isWall = true;
                document.getElementById(`${makeWallAt}-${col+i}`)!.className = `${WALL_TILE_STYLE} animate-wall`;
                await sleep(10 * SPEEDS.find((s) => s.value === speed)!.value - 5);
            }
        }
    }

    await recursiveDivision({
        grid,
        startTile,
        endTile,
        row,
        col,
        height: (makeWallAt - row + 1) / 2,
        width,
        setIsDisabled,
        speed,  
    });
    await recursiveDivision({
        grid,
        startTile,
        endTile,
        row: makeWallAt + 1,
        col,
        height: height - (makeWallAt - row + 1) / 2,
        width,
        setIsDisabled,
        speed,
    });
}   