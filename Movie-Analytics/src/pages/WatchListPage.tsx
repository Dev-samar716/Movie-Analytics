import useWatchListContext from "../hooks/useWatchListContext"
import Header from "../components/Header"; 
import type { GenreObjectKeys } from "../types";
import useFilteredGenres from "../hooks/useFilteredGenres";
import type { SetStateAction, Dispatch } from "react";
import MovieCard from "../components/MovieCard";
import { useEffect } from "react";

interface Props {
  genres: GenreObjectKeys[], 
  selectedGenre: string[], 
  setSelectedGenre: Dispatch<SetStateAction<string[]>>
}

const WatchListPage = ({genres, selectedGenre, setSelectedGenre} : Props) => {
  const { watchList } = useWatchListContext();
  const filteredGenres = useFilteredGenres({genres})

   useEffect(() => {
    localStorage.setItem("watchListMovies", JSON.stringify(watchList))
  }, [watchList])

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8 space-y-12">
        <Header filteredGenres={filteredGenres} selectedGenre={selectedGenre} 
        setSelectedGenre={setSelectedGenre} title="Your Watch list"/>

     <div className="flex overflow-x-auto space-x-4 pb-4 gap-4">
        {watchList.map(movie => {
            return <MovieCard key={movie.id} movie={movie} mode="watchlist"/>
        })}
     </div>
    </div>
  )
}

export default WatchListPage