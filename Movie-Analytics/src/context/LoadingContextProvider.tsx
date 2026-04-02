import LoadingContext from './LoadingContext' 
import type { ReactNode } from 'react' 
import { useState } from 'react' 

const LoadingContextContextProvider = ({children}: {children: ReactNode}) => {
    const [loading, setLoading] = useState<boolean>(false); 

    return(
        <LoadingContext.Provider value={{loading, setLoading}}>
            {children}
        </LoadingContext.Provider>
    )
} 
export default LoadingContextContextProvider