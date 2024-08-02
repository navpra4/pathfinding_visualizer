"use client"
import { Play, RefreshCcw } from "lucide-react"
import { SelectMaze } from "./SelectMaze"
import { Button } from "./ui/button"
import { SelectAlgorithm } from "./SelectAlgorithm"
import { usePathFinding } from "@/hooks/usePathFinding"
import { resetGrid } from "@/lib/resetGrid"
import { useTile } from "@/hooks/useTile"
import { runPathFindingAlgo } from "@/lib/runPathFindingAlgo"
import { animatePath } from "@/lib/animatePath"
import { useSpeed } from "@/hooks/useSpeed"
import { MutableRefObject, useState } from "react"
import { EXTENDED_SLEEP_TIME, SLEEP_TIME, SPEEDS } from "@/lib/constants"
import { SelectSpeed } from "./SelectSpeed"

const Navbar = ({isVisualizationRunningRef}: {isVisualizationRunningRef: MutableRefObject<boolean>}) => {
    const {grid,setGrid, algorithm,isGraphVisualized, setIsGraphVisualized} = usePathFinding()
    const {startTile, endTile} = useTile()
    const {speed} = useSpeed()
    const [isDisabled, setIsDisabled] = useState(false)
    const handleRunVisualizer = ()=>{
        if(isGraphVisualized){
            setIsGraphVisualized(false);
            resetGrid({grid: grid.slice(), startTile, endTile})
            return
        }

        setIsDisabled(true);
        const {traversedTiles, path} = runPathFindingAlgo({algorithm,grid,startTile,endTile})

        animatePath(traversedTiles,path,startTile,endTile,speed);

        // setIsDisabled(true);

        isVisualizationRunningRef.current = true;
        setIsDisabled(false);
        setTimeout(() => {
            const newGrid = grid.slice();
            setGrid(newGrid);
            setIsGraphVisualized(true);
            setIsDisabled(false);
            isVisualizationRunningRef.current = false;
          }, SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
    }
    return (
    <div className=" flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 sm:px-5 px-0">
        <div className=" flex items-center lg:justify-between justify-center w-full ">
            <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
                PathFinding Visualizer 
            </h1>
            <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
                <SelectMaze isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>
                <SelectAlgorithm isDisabled={isDisabled}/>
                <SelectSpeed isDisabled={isDisabled}/>
                <Button onClick={handleRunVisualizer}
                    className="flex items-center justify-center" 
                    disabled= {isDisabled}   
                >   
                    Visualize
                    { isGraphVisualized ?
                        <RefreshCcw className=" ml-2 h-4 w-4 rounded-full" />:                        
                        <Play className=" ml-2 h-4 w-4 rounded-full"/>
                    }
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar