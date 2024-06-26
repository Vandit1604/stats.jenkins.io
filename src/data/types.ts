export type GraphType =
    | 'jenkins'
    | 'jobs'
    | 'nodes'
    | 'nodesPie'
    | 'plugins'
    | 'top-plugins1000'
    | 'top-plugins2500'
    | 'top-plugins500'
    | 'total-executors'

export type SortOption = 'alphabetical' | 'downloadsHighToLow' | 'downloadsLowToHigh'
