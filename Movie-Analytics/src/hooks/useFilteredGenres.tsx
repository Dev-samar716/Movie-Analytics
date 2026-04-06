import type { GenreObjectKeys } from "../types";
import useAvailableMovieGenres from "./useAvailableMovieGenres" 
import { useMemo } from "react";

const useFilteredGenres = ({genres}: {genres: GenreObjectKeys[]}) => {
  const availableMovies : string[] = useAvailableMovieGenres();
   
  const filteredGenres : GenreObjectKeys[] =  useMemo(() => { 
    if(!genres) return [];
      return genres.filter(genre => availableMovies.includes(String(genre.id)));
  }, [genres, availableMovies]) 

    return filteredGenres;
} 

export default useFilteredGenres