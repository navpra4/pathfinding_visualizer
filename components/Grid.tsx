"use client"

import { usePathFinding } from "@/hooks/usePathFinding"
import { MAX_COLS, MAX_ROWS } from "@/lib/constants";
import { twMerge } from "tailwind-merge";
import Tile from "./Tile";
import { MutableRefObject, useState } from "react";
import { CheckIfStartOrEnd, createNewGrid } from "@/lib/helpers";

export const Grid = ({isVisualizationRunningRef}: {isVisualizationRunningRef: MutableRefObject<boolean>}) => {
    const { grid, setGrid } = usePathFinding();
    const [isMouseDown, setIsMouseDown] = useState(false)
    const handleMouseDown = (row: number, col: number)=>{
        if(isVisualizationRunningRef.current || CheckIfStartOrEnd(row,col))
            return false;

        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row,col);
        setGrid(newGrid);
    }
    const handleMouseUp = (row: number, col: number)=>{
        if(isVisualizationRunningRef.current || CheckIfStartOrEnd(row,col))
            return false;
        setIsMouseDown(false);

    }
    const handleMouseEnter = (row: number, col: number)=>{
        if(isVisualizationRunningRef.current || CheckIfStartOrEnd(row,col))
            return false;
        if(isMouseDown){
            const newGrid = createNewGrid(grid, row,col);
            setGrid(newGrid);
        }
    }

    return (
        <div className={twMerge(
            'flex flex-col items-center justify-center border-blue-300',
            `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
            `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
        )}>
            {grid.map((r, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {r.map((tile, tileIndex) => {
                        const { isEnd, isPath, isStart, isTraversed, isWall , row, col} = tile;
                        return (
                            <Tile
                                key={tileIndex}
                                row={tile.row}
                                col={tile.col}
                                isEnd={isEnd}
                                isPath={isPath}
                                isStart={isStart}
                                isWall={isWall}
                                isTraversed={isTraversed}
                                handleMouseDown = {()=> handleMouseDown(row,col)}
                                handleMouseUp = {()=> handleMouseUp(row,col)}
                                handleMouseEnter = {()=> handleMouseEnter(row,col)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
