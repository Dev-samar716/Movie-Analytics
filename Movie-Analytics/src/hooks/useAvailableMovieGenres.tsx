import { useMovies } from "./useMovies"  
import type Movie from "../types"; 
import { useMemo } from "react";

const useAvailableMovieGenres = () => { 
    const movies : Movie[] = useMovies();

    const availableMovies = useMemo(() => {
       if(!movies) return []; 

      const allGenres = movies.flatMap(movie => movie.genre_ids);  
      
      const uniqueGenres = Array.from(new Set(allGenres)).map(String);

      return uniqueGenres;

    }, [movies]) 

    return availableMovies;
}

export default useAvailableMovieGenres