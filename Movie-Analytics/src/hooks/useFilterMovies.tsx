import { useMemo } from "react"
import usePopularMoviesContext from "../hooks/usePopularMoviesContext"; 
import useTopRatedMoviesContext from "../hooks/useTopRatedMoviesContext"; 
import useTrendingMoviesContext from "../hooks/useTrendingMoviesContext";
import type Movie from "../types";
import useSearchResults from '../hooks/useSearchResultsContext'

interface Props {
    selectedGenre: string[]
}
const useFilterMovies = ({selectedGenre} : Props ) => { 
    const { popularMovies } = usePopularMoviesContext(); 
    const { trendingMovies } = useTrendingMoviesContext(); 
    const { topRatedMovies } = useTopRatedMoviesContext();
    const { searchResults } = useSearchResults();

   const filteredPopularMovies : Movie[] = useMemo(() => {
      if(!popularMovies) return [];
      
       if(selectedGenre.length === 0) return popularMovies 
       else return popularMovies.reduce((acc : Movie[], movie : Movie) => {
           const isValid = movie.genre_ids.some(genreId => selectedGenre.includes(String(genreId))); 

           if(isValid) {
            acc.push(movie);
           } 
           return acc;
       }, []);
       
   }, [selectedGenre, popularMovies]);

   const filteredTrendingMovies : Movie[] = useMemo(() => {
    if(!trendingMovies) return []

      const sortedTrendingMovie = trendingMovies.sort((a,b) => b.vote_average - a.vote_average);
       if(selectedGenre.length === 0) return sortedTrendingMovie;
       else return trendingMovies.reduce((acc : Movie[], movie : Movie) => {
           const isValid = movie.genre_ids.some(genreId => selectedGenre.includes(String(genreId))); 

           if(isValid) {
            acc.push(movie);
           } 
           return acc;
       }, []);
       
   }, [selectedGenre, trendingMovies]);

   const filteredTopRatedMovies : Movie[] = useMemo(() => {
    if(!topRatedMovies) return []

       if(selectedGenre.length === 0) return topRatedMovies
       else return topRatedMovies.reduce((acc : Movie[], movie : Movie) => {
           const isValid = movie.genre_ids.some(genreId => selectedGenre.includes(String(genreId))); 

           if(isValid) {
            acc.push(movie);
           } 
           return acc;
       }, []);
   }, [selectedGenre, topRatedMovies]);

   const filteredSearchResults : Movie[] = useMemo(() => { 
    if(!searchResults) return [] 

    if(selectedGenre.length === 0) return searchResults; 
    else return searchResults.reduce((acc : Movie[], movie : Movie) => {
         
        const isValid = movie.genre_ids.some(genreId => selectedGenre.includes(String(genreId))); 

        if(isValid) {
            acc.push(movie);
        }
        return acc
    }, [])

   }, [selectedGenre, searchResults])

   return {filteredPopularMovies, filteredTrendingMovies, filteredTopRatedMovies, filteredSearchResults};
}

export default useFilterMovies;