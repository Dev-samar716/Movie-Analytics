import usePopularMoviesContext from "../hooks/usePopularMoviesContext"; 
import useTopRatedMoviesContext from "../hooks/useTopRatedMoviesContext"; 
import useTrendingMoviesContext from "../hooks/useTrendingMoviesContext"; 
import type Movie from '../types' 
import { useMemo } from 'react';

export const useMovies = () => {
    const { popularMovies } = usePopularMoviesContext();
    const { topRatedMovies } = useTopRatedMoviesContext();
    const { trendingMovies } = useTrendingMoviesContext();

    const movies : Movie[] = useMemo(() => { 
    if(!popularMovies && !topRatedMovies && !trendingMovies) return [];
    return [...popularMovies, ...topRatedMovies, ...trendingMovies]; 
  }, [popularMovies, topRatedMovies, trendingMovies]) 

  return movies;
} 
