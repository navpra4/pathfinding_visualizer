import { MAX_ROWS } from "@/lib/constants";
import { twMerge } from "tailwind-merge";

const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600";

export default function Tile({
    row,
    col,
    isStart,
    isEnd,
    isPath,
    isWall,
    isTraversed
}:{
    row: number;
    col: number;
    isStart: boolean;
    isEnd: boolean;
    isPath: boolean;
    isWall: boolean;
    isTraversed: boolean;
}){
    let tileTyleStyle;

    if (isStart) {
        tileTyleStyle = START_TILE_STYLE;
    } else if (isEnd) {
        tileTyleStyle = END_TILE_STYLE;
    } else if (isWall) {
        tileTyleStyle = WALL_TILE_STYLE;
    } else if (isPath) {
        tileTyleStyle = PATH_TILE_STYLE;
    } else if (isTraversed) {
        tileTyleStyle = TRAVERSED_TILE_STYLE;
    } else {
        tileTyleStyle = TILE_STYLE;
    }

    const borderStyle =
        row === MAX_ROWS - 1 ? "border-b" : col === 0 ? "border-l" : "";
    const edgeStyle = row === MAX_ROWS - 1 && col === 0 ? "border-l" : "";


    return (
        
        <div className={twMerge(tileTyleStyle, borderStyle, edgeStyle)} id={`${row}-${col}`}/>
        
    )
}