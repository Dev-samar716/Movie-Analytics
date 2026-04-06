import { createContext } from 'react'   
import type { WatchList_StateTypes } from '../types'

const WatchListContext = createContext<WatchList_StateTypes | undefined>(undefined) 

export default WatchListContext