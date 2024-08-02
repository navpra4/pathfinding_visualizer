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

import { useSpeed } from "@/hooks/useSpeed"
import { SpeedType } from "@/lib/types"


export function SelectSpeed({isDisabled}:{isDisabled: boolean}) {

  const {setSpeed} = useSpeed()
  return (
    <Select disabled={isDisabled} onValueChange={(value) => setSpeed(parseFloat(value) as SpeedType)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select speed" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Speed</SelectLabel>
          <SelectItem value="2">Slow</SelectItem>
          <SelectItem value="1">Medium</SelectItem>
          <SelectItem value="0.5">Fast</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
