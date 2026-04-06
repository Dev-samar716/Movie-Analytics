import type Movie from "../types"
import RemoveFromWatchList from '../functions/removeFromWatchList'
import useWatchListContext from "../hooks/useWatchListContext"

interface Props {
     movie: Movie
}

const RemoveWatchListButton = ({movie} : Props) => {
    const { setWatchList } = useWatchListContext()
       return(
          <button
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 
        bg-gray-800 text-gray-200 hover:bg-gray-700 font-poppins
      `}
      onClick={() => RemoveFromWatchList({setWatchList, movie})}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-5 w-5 text-emerald-500`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d={"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"}
          clipRule="evenodd"
        />
      </svg>
      Remove from watchlist
    </button>
       )
}

export default RemoveWatchListButton