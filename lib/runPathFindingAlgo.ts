import { aStar } from "./algorithms/pathfinding/aStar";
import { bfs } from "./algorithms/pathfinding/bfs";
import { dfs } from "./algorithms/pathfinding/dfs";
import { dijkstra } from "./algorithms/pathfinding/dijkstra";
import { AlgoirthmType, GridType, TileType } from "./types"

export const runPathFindingAlgo = ({
   algorithm,
   grid,
   startTile,
   endTile 
}:{
    algorithm: AlgoirthmType,
    grid: GridType,
    startTile: TileType,
    endTile: TileType
})=>{
    switch (algorithm) {
        case 'BFS':
            return bfs(grid, startTile, endTile);
        case 'DFS':
            return dfs(grid, startTile, endTile); 
        case 'DIJKSTRA':
            return dijkstra(grid, startTile, endTile);
        case 'A_STAR':
            return aStar(grid, startTile, endTile);  
        default:
            return bfs(grid, startTile, endTile);
    }
}