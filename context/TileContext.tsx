"use client"

import { ENDING_TILE_CONFIG, STARTING_TILE_CONFIG } from "@/lib/constants";
import { TileType } from "@/lib/types";
import React, { createContext, useState } from "react";

interface TileContextInterface {
    startTile: TileType,
    setStartTile: (startTile: TileType)=> void,
    endTile: TileType,
    setEndTile: (endTile: TileType)=> void,
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined)

export const TileProvider = ({children}:{children: React.ReactNode})=>{
    const [startTile, setStartTile] = useState<TileType>(STARTING_TILE_CONFIG)
    const [endTile, setEndTile] = useState<TileType>(ENDING_TILE_CONFIG)

    return (
        <TileContext.Provider
            value={{
                startTile,
                setStartTile,
                endTile,
                setEndTile,
            }}
        >
            {children}
        </TileContext.Provider>
    )
}