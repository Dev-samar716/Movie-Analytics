import type { Dispatch, SetStateAction } from "react"
import type Movie from "../types"


interface Props {
    setWatchList: Dispatch<SetStateAction<Movie[]>> 
    movie: Movie
}

const RemoveFromWatchList = ({setWatchList, movie}: Props) => {
   const id = movie.id; 

   setWatchList(prev => prev.filter(movie => movie.id !== id));
}

export default RemoveFromWatchList