import Header from "../components/Header";
import FeaturedSection from "../components/FeaturedSection";
import MovieSection from "../components/MovieSection";
import {type SetStateAction, type Dispatch } from "react"; 
import useFilterMovies from "../hooks/useFilterMovies"
import type Movie from "../types"; 
import useFilterGenres from "../hooks/useFilteredGenres";
import type { GenreObjectKeys } from "../types"; 
import SearchResults from '../components/SearchResults'

interface FilteredMoviesTypes {
  filteredPopularMovies: Movie[], 
  filteredTrendingMovies: Movie[], 
  filteredTopRatedMovies: Movie[],
  filteredSearchResults: Movie[]
}

interface Props {
  genres: GenreObjectKeys[], 
  selectedGenre: string[]
  setSelectedGenre: Dispatch<SetStateAction<string[]>>
}

export default function HomePage({genres, selectedGenre, setSelectedGenre} : Props) {
  
  const {filteredPopularMovies, 
        filteredTrendingMovies, 
        filteredTopRatedMovies,
       filteredSearchResults} : FilteredMoviesTypes = useFilterMovies({selectedGenre});

  const filteredGenres = useFilterGenres({genres})

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8 space-y-12">

      <Header filteredGenres={filteredGenres} selectedGenre={selectedGenre} 
      setSelectedGenre={setSelectedGenre} title="Movie Analytics Dashboard"/>

      <FeaturedSection />
       {filteredSearchResults.length === 0 ? <section className="space-y-8">
        <MovieSection  movies={filteredTrendingMovies} title='Trending Movies'/>
        <MovieSection  movies={filteredPopularMovies} title='Popular Movies'/>
        <MovieSection  movies={filteredTopRatedMovies} title='Top Rated Movies'/>
      </section> : <SearchResults filteredSearchResults={filteredSearchResults}/> }

      <footer className="mt-12 text-gray-400 text-sm flex justify-center">
        &copy; 2026 Movie Analytics. All rights reserved.
      </footer>

    </div>
  );
}
  