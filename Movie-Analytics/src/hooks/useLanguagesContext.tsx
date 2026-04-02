import { useContext } from "react"; 
import LanguageContext from "../context/LanguageContext"; 


const usePopularMoviesContext = () => {
  const context = useContext(LanguageContext); 

  if(!context)  {
    throw new Error("useLanguages must be used within LanguageContextProvider");
  }
  const {languages, setLanguages} = context;
  
  return {languages, setLanguages};
}

export default usePopularMoviesContext;