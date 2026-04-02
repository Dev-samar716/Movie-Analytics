import LanguageContext from './LanguageContext' 
import type { ReactNode } from 'react' 
import { useState } from 'react' 
import type { Languages } from '../types'

const LanguageContextProvider = ({children}: {children: ReactNode}) => {
    const [languages, setLanguages] = useState<Languages[]>([]); 

    return(
        <LanguageContext.Provider value={{languages, setLanguages}}>
            {children}
        </LanguageContext.Provider>
    )
} 
export default LanguageContextProvider