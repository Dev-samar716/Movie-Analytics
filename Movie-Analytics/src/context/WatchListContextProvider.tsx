import WatchListContext from './WatchListContext' 
import type Movie from '../types' 
import { useState } from 'react'
import type { ReactNode } from 'react' 

const WatchListContextProvider = ({children} : {children : ReactNode}) => {
    const [watchList, setWatchList] = useState<Movie[]>(() => {
        const stored = localStorage.getItem("watchListMovies"); 
        return stored ? JSON.parse(stored) : []
    }); 

    return(
        <WatchListContext.Provider value={{watchList, setWatchList}}>
            {children}
        </WatchListContext.Provider>
    )
}
export default WatchListContextProvider