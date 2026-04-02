import Header from "../components/Header";
import FeaturedSection from "../components/FeaturedSection";
import MovieSection from "../components/MovieSection";
import { useState, useMemo } from "react"; 
import useFilterMovies from "../hooks/useFilterMovies"
import type Movie from "../types"; 
import useAvailableMovieGenres from "../hooks/useAvailableMovieGenres"; 
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
}

export default function HomePage({genres} : Props) {
  const [selectedGenre, setSelectedGenre] = useState<string[]>([]);
  
  const {filteredPopularMovies, 
        filteredTrendingMovies, 
        filteredTopRatedMovies,
       filteredSearchResults} : FilteredMoviesTypes = useFilterMovies({selectedGenre});
  const availableMovies : string[] = useAvailableMovieGenres();

  const filteredGenres : GenreObjectKeys[] =  useMemo(() => { 
    if(!genres) return [];
      return genres.filter(genre => availableMovies.includes(String(genre.id)));
  }, [genres, availableMovies])

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-8 space-y-12">

      <Header filteredGenres={filteredGenres} selectedGenre={selectedGenre} 
      setSelectedGenre={setSelectedGenre}/>

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
  