import { useContext } from "react"; 
import SearchResultsContext from '../context/SearchResultsContext';

const useSearchResults = () => {
  const context = useContext(SearchResultsContext); 

  if(!context)  {
    throw new Error("useSearchResults must be used within SearchResultsContextProvider");
  }
  const {searchResults, setSearchResults} = context;
  
  return {searchResults, setSearchResults};
}

export default useSearchResults;