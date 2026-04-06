import type Movie from "../types" 
import { type SetStateAction, type Dispatch} from "react";

interface Props {
     setWatchList: Dispatch<SetStateAction<Movie[]>>,
     movie: Movie;
     watchList: Movie[]
}

const AddToWatchList = ({movie, setWatchList, watchList} : Props) => {  

     const isDuplicate = watchList.some(item => String(item.id) === String(movie.id)) 
     console.log(isDuplicate)

     if(isDuplicate) return;

     const newWatchList = structuredClone(movie);
     setWatchList(prev => [...prev, newWatchList]); 
}

export default AddToWatchList;