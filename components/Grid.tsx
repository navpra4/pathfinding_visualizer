"use client"

import { usePathFinding } from "@/hooks/usePathFinding"
import { MAX_COLS, MAX_ROWS } from "@/lib/constants";
import { twMerge } from "tailwind-merge";
import Tile from "./Tile";

export const Grid = () => {
    const { grid } = usePathFinding();

    return (
        <div className={twMerge(
            'flex flex-col items-center justify-center border-blue-300',
            `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
            `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
        )}>
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((tile, tileIndex) => {
                        const { isEnd, isPath, isStart, isTraversed, isWall } = tile;
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
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
