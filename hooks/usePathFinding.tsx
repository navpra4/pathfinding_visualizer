"use client"

import { PathFindingContext } from "@/context/PathFindingContext"
import { useContext } from "react"

export const usePathFinding = ()=>{
    const context = useContext(PathFindingContext)
    if(!context){
        throw new Error("usePathFinding must be used inside PathFindingProvider")
    }

    return context;
}