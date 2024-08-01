"use client"

import { ENDING_TILE_CONFIG, STARTING_TILE_CONFIG } from "@/lib/constants";
import { createGrid } from "@/lib/helpers";
import { AlgoirthmType, GridType, MazeType } from "@/lib/types";
import React, { createContext, useState } from "react";

interface PathFindingContextInterface {
    algorithm: AlgoirthmType,
    setAlgorithm: (algorithm:AlgoirthmType) => void,
    maze: MazeType,
    setMaze: (maze: MazeType)=> void,
    grid: GridType,
    setGrid: (grid: GridType)=> void,
    isGraphVisualized: boolean,
    setIsGraphVisualized: (isGraphVisualized: boolean)=> void
}

export const PathFindingContext = createContext<PathFindingContextInterface | undefined>(undefined)

export const PathFindingProvider = ({children}:{children: React.ReactNode})=>{
    const [algorithm, setAlgorithm] = useState<AlgoirthmType>('BFS');
    const [maze, setMaze] = useState<MazeType>('NONE');
    const [grid, setGrid] = useState<GridType>(createGrid(STARTING_TILE_CONFIG, ENDING_TILE_CONFIG));
    const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

    return (
        <PathFindingContext.Provider
            value={{
                algorithm,
                setAlgorithm,
                maze,
                setMaze,
                grid,
                setGrid,
                isGraphVisualized,
                setIsGraphVisualized
            }}
        >
            {children}
        </PathFindingContext.Provider>
    )
}
