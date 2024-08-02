import { EXTENDED_SLEEP_TIME, SLEEP_TIME, SPEEDS } from "./constants";
import { isEqual } from "./helpers";
import { SpeedType, TileType } from "./types";

const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";
export const animatePath = (
    traversedTiles: TileType[],
    path: TileType[],
    startTile: TileType,
    endTile: TileType,
    speed: SpeedType
) => {
    for(let i=0;i<traversedTiles.length;i++){
        setTimeout(()=>{
            const tile = traversedTiles[i];
            if(!isEqual(tile,startTile) && !isEqual(tile, endTile)){
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`
            }
        },SLEEP_TIME*i*SPEEDS.find(s => s.value === speed)!.value)
    }

    setTimeout(()=>{
        for(let i=0;i<path.length;i++){
            setTimeout(()=>{
                const tile = path[i];
                document.getElementById(`${tile.row}-${tile.col}`)!.className = `${PATH_TILE_STYLE} animate-path`;
            },EXTENDED_SLEEP_TIME*i*SPEEDS.find(s => s.value === speed)!.value)
        }
    },SLEEP_TIME*traversedTiles.length*SPEEDS.find(s => s.value === speed)!.value )
}