import SearchResultsContext from './SearchResultsContext'
import type { ReactNode } from 'react' 
import { useState } from 'react' 
import type Movies from '../types'

const SearchResultsContextProvider = ({children}: {children: ReactNode}) => {
    const [searchResults, setSearchResults] = useState<Movies[]>([]); 

    return(
        <SearchResultsContext.Provider value={{searchResults, setSearchResults}}>
            {children}
        </SearchResultsContext.Provider>
    )
} 
export default SearchResultsContextProvider 