import './App.css'
import HomePage from './pages/HomePage';
import { useState, useEffect } from 'react'; 
import type { GenreObjectKeys } from './types'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MoviePage from './pages/MoviePage'
import usePopularMoviesContext from "./hooks/usePopularMoviesContext"; 
import useTopRatedMoviesContext from "./hooks/useTopRatedMoviesContext"; 
import useTrendingMoviesContext from "./hooks/useTrendingMoviesContext"; 
import useLanguagesContext from "./hooks/useLanguagesContext"; 
import fetchMovieData from "./services/MovieDataFetch.ts";
import SearchResultsContextProvider from './context/SearchResultsContextProvider.tsx'
import LoadingContextContextProvider from './context/LoadingContextProvider.tsx'

function App() { 
  const [genres, setGenres] = useState<GenreObjectKeys[]>([])
  const { setPopularMovies } = usePopularMoviesContext();
  const { setTopRatedMovies } = useTopRatedMoviesContext();
  const { setTrendingMovies } = useTrendingMoviesContext();
  const { setLanguages } = useLanguagesContext()
  
  const routers = createBrowserRouter([
    {path: '/', element: <HomePage genres={genres}/>}, 
    {path: '/movie/:id', element: <MoviePage genres={genres}/>}
  ]);
 // Fetching the data in app component because we need fresh data for several components after each reload
  useEffect(() => {
       const loadMovieData = async() => {
        try {
          const data  = await fetchMovieData(); 
          if(!data) return; 
  
         const {trending, popular, topRated, genres, languages} = data;  
  
            setGenres(genres.genres);
            setPopularMovies(popular.results); 
            setTopRatedMovies(topRated.results); 
            setTrendingMovies(trending.results); 
            setLanguages(languages);
     
        } catch(error : unknown) {
          console.log(error);
          throw new Error(`Something went wrong while fetching data...`)
        }
       }
       loadMovieData();
   }, [])
  
  return (
  <SearchResultsContextProvider> 
    <LoadingContextContextProvider>
      <RouterProvider router={routers} />
    </LoadingContextContextProvider> 
  </SearchResultsContextProvider>
)
} 
export default App;