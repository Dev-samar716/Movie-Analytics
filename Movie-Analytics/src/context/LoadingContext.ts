import { createContext } from "react"; 
import type { LoadingStateTypes }from '../types'

const LoadingContext = createContext<LoadingStateTypes | undefined>(undefined); 

export default LoadingContext;