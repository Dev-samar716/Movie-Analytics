import type Movie from "../types";  
import popularMoviesContext from './PopularMoviesContext'  
import type { ReactNode } from "react"; 
import { useState } from "react";

const PopularMoviesContextProvider = ({children} : {children: ReactNode}) => {
     const [popularMovies, setPopularMovies] = useState<Movie[]>([]); 

     return(
        <popularMoviesContext.Provider value={{popularMovies, setPopularMovies}}>
          {children}
        </popularMoviesContext.Provider>
     )
} 
export default PopularMoviesContextProvider;