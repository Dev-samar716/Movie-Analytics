import { useContext } from "react"; 
import LoadingContext from "../context/LoadingContext"; 


const useLoading = () => {
  const context = useContext(LoadingContext); 

  if(!context)  {
    throw new Error("useLoading must be used within LoadingMoviesProvider");
  }
  const {loading, setLoading} = context;
  
  return {loading, setLoading};
}

export default useLoading;