import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import PopularMoviesContextProvider from './context/PopularMoviesContextProvider'; 
import TrendingMoviesContextProvider from './context/TrendingMoviesContextProvider'; 
import TopRatedMoviesContextProvider from './context/TopRatedMoviesContextProvider';
import LanguageContextProvider from './context/LanguageContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PopularMoviesContextProvider> 
      <TrendingMoviesContextProvider>
        <TopRatedMoviesContextProvider>
       <LanguageContextProvider>
         <App /> 
       </LanguageContextProvider>
    </TopRatedMoviesContextProvider>
      </TrendingMoviesContextProvider>
    </PopularMoviesContextProvider>
  </StrictMode>,
)
