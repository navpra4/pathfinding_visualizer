"use client"

import { TileContext } from "@/context/TileContext"
import { useContext } from "react"

export const useTile = ()=>{
    const context = useContext(TileContext)

    if(!context){
        throw new Error('useTile must be used only inside TileProvider')
    }

    return context;
}