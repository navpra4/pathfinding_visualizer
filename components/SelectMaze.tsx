"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathFinding } from "@/hooks/usePathFinding"
import { MazeType } from "@/lib/types"
import { resetGrid } from "@/lib/resetGrid"
import { runMazeAlgorithm } from "@/lib/runMazeAlgorithm"
import { useTile } from "@/hooks/useTile"
import { useSpeed } from "@/hooks/useSpeed"

export function SelectMaze({
  isDisabled,
  setIsDisabled
}:{
  isDisabled: boolean,
  setIsDisabled: (isDisabled: boolean)=> void
}) {
  const {grid, maze, setMaze, setGrid, setIsGraphVisualized} = usePathFinding()
  const {startTile, endTile} = useTile()
  const {speed} = useSpeed()
  const handleGenerateMaze = (maze: MazeType)=>{
    if(maze=='NONE'){
        setMaze(maze);
        resetGrid({grid, startTile, endTile})
        return;
    }
    setMaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
        maze,grid, startTile, endTile,setIsDisabled, speed
    })
    const newGrid = grid.slice();
    setGrid(newGrid);
    setIsGraphVisualized(false);
}
  return (
    <Select onValueChange={(e)=>{
      handleGenerateMaze(e as MazeType)
    }} disabled={isDisabled}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a maze type" />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup>
          <SelectLabel>Mazes</SelectLabel>
          <SelectItem value="NONE">No Maze</SelectItem>
          <SelectItem value="BINARY_TREE">Binary Tree</SelectItem>
          <SelectItem value="RECURSIVE_DIVISION">Recursive Division</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
