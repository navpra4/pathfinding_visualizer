export type AlgoirthmType = 'BFS' | 'DFS' | 'DIJKSTRA' | 'A_STAR'

export type MazeType = 'NONE' | 'BINARY_TREE' | 'RECURSIVE_DIVISION'

export type TileType = {
    row: number,
    col: number,
    isStart: boolean,
    isEnd: boolean,
    isWall:boolean,
    parent: TileType | null,
    isPath: boolean,
    distance: number,
    isTraversed: boolean
}

export type GridType = TileType[][]

export type SpeedType = 0.5 | 1 | 2

export interface SpeedSelectType {
    name: string,
    value: SpeedType
}