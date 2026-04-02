import { useContext } from "react";
import trendingMoviesContext from "../context/TrendingMoviesContext";

const useTrendingMoviesContext = () => {
  const context = useContext(trendingMoviesContext);

  if (!context) {
    throw new Error("useTrendingMovies must be used within TrendingMoviesProvider");
  } 
  const {trendingMovies, setTrendingMovies} = context;

  return {trendingMovies, setTrendingMovies};
};

export default useTrendingMoviesContext;