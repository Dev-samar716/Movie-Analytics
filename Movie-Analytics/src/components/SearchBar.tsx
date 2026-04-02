import { useEffect, useState} from 'react'; 
import { fetchSearchedMovieData } from '../services/MovieDataFetch';
import useSearchResults from '../hooks/useSearchResultsContext'
import useLoading from '../hooks/useLoading' 
import type Movie from '../types'

const ModernSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { searchResults, setSearchResults } = useSearchResults(); 
  const { setLoading } = useLoading()

    const handleSearch = async() => {
        if(searchQuery === "") return; 

         const results = await fetchSearchedMovieData({searchQuery}); 
        const filteredResults = results.results.filter((movie : Movie) => movie.poster_path != null)
         setLoading(true);
         setSearchResults(filteredResults);
    } 

    useEffect(() => {
        if(searchResults.length === 0) return; 
        setLoading(false)
    }, [searchResults])

  return (
    <div className="relative group max-w-md w-full">
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg 
          className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search projects..."
        className="block w-full pl-10 pr-12 py-3 bg-white-400 backdrop-blur-md border border-gray-200 rounded-2xl leading-5 
                   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
                   transition-all duration-200 shadow-sm hover:shadow-md"
      />

      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
        <button className="cursor-pointer hover:bg-gray-800 p-1"
        onClick={() => handleSearch()}> 
            <i className="fa fa-search"></i>
        </button>

      </div>
    </div>
  );
};

export default ModernSearchBar;
