import { useEffect, useState } from 'react';
import useWatchListContext from '../hooks/useWatchListContext' 
import type { WatchList_StateTypes } from '../types';
import type Movie from '../types'; 
import AddToWatchList from '../functions/addToWatchList';

const WatchlistButton = ({movie} : {movie : Movie}) => {
  const { watchList, setWatchList} : WatchList_StateTypes = useWatchListContext()
  const [isAdded, setIsAdded] = useState<boolean>(false)

  useEffect(() => {
    console.log(watchList);
      if(!watchList.some(item => String(item.id) === String(movie.id))) {
        setIsAdded(false)
      } else {
        setIsAdded(true)
    }
  }, [watchList, isAdded, movie.id])

  return (
    <button
     onClick={() => {
        AddToWatchList({movie, setWatchList, watchList})
     }}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
        isAdded
          ? 'bg-emerald-600 text-white hover:bg-emerald-700'
          : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
      }`}
    >
      {/* Icon (Optional) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 ${isAdded ? 'text-white' : 'text-emerald-500'}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={isAdded ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" : "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"}
          clipRule="evenodd"
        />
      </svg>
      {isAdded ? 'In Watchlist' : 'Add to Watchlist'}
    </button>
  );
};

export default WatchlistButton;
