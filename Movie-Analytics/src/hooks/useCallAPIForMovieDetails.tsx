import { useState, useEffect } from "react" 
import  { fetchMovieById } from "../services/MovieDataFetch" 
import type Movie from "../types"

const useCallAPIForMovieDetails = ({id} : {id : number}) => { 
    const [movie, setMovie] = useState<Movie | undefined>(undefined)
  useEffect(() => {
          const loadMovieData = async() => {
              const data = await fetchMovieById({id}) 
              setMovie(data);
          } 
          loadMovieData()
      }, [id])
      return movie
}

export default useCallAPIForMovieDetails