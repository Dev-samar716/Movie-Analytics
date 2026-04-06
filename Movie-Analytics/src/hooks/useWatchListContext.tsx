import WatchListContext from "../context/WatchListContext" 
import { useContext } from "react"

const useWatchListContext = () => {
  const context = useContext(WatchListContext); 

  if(!context)  {
    throw new Error("useWatchListContext must be used within WatchListContext");
  }
  const {watchList, setWatchList} = context; 

  return {watchList, setWatchList}
}

export default useWatchListContext