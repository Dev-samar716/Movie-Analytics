import { useContext } from "react";
import topRatedMoviesContext from "../context/TopRatedMoviesContext";

const useTopRatedMoviesContext = () => {
  const context = useContext(topRatedMoviesContext);

  if (!context) {
    throw new Error("useTopRatedMovies must be used within TopRatedMoviesProvider");
  } 
  const {topRatedMovies, setTopRatedMovies} = context;

  return {topRatedMovies, setTopRatedMovies};
};

export default useTopRatedMoviesContext;