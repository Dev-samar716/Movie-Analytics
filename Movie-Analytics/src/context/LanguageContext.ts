import { createContext } from "react"; 
import type { Languages_State_Types } from '../types'

const LanguageContext = createContext<Languages_State_Types | undefined>(undefined); 

export default LanguageContext;