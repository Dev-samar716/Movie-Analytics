import { useContext } from "react"; 
import popularMoviesContext from "../context/PopularMoviesContext"; 


const usePopularMoviesContext = () => {
  const context = useContext(popularMoviesContext); 

  if(!context)  {
    throw new Error("usePopularMoviesContext must be used within popularMoviesContext");
  }
  const {popularMovies, setPopularMovies} = context;
  
  return {popularMovies, setPopularMovies};
}

export default usePopularMoviesContext;