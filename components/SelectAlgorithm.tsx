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
import { AlgoirthmType } from "@/lib/types"


export function SelectAlgorithm({isDisabled}:{isDisabled: boolean}) {
  const {algorithm, setAlgorithm} = usePathFinding() 
  
  return (
    <Select onValueChange={(e: AlgoirthmType)=>{
      setAlgorithm(e)
    }} disabled={isDisabled}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a algorithm" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Algorithms</SelectLabel>
          <SelectItem value="BFS">BFS</SelectItem>
          <SelectItem value="DFS">DFS</SelectItem>
          <SelectItem value="DIJKSTRA">Dijkstra</SelectItem>
          <SelectItem value="A_STAR">A-Star</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
