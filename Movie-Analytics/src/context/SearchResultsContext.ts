import { createContext } from "react"; 
import type { SearchResultState } from '../types'

const SearchResultsContext = createContext<SearchResultState | undefined>(undefined) 

export default SearchResultsContext