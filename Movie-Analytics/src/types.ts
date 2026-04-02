import type { Dispatch, SetStateAction } from "react";
// ---MOVIE---
export default interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres? : GenreObjectKeys[]
} 
// ---API--- 
export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// ---STATES--- 

export interface PopularMoviesState {
  popularMovies: Movie[], 
  setPopularMovies: Dispatch<SetStateAction<Movie[]>>;
}

export interface TrendingMoviesState {
  trendingMovies: Movie[];
  setTrendingMovies: Dispatch<SetStateAction<Movie[]>>;
}

export interface TopRatedMoviesState {
  topRatedMovies: Movie[];
  setTopRatedMovies: Dispatch<SetStateAction<Movie[]>>;
}

// ---GENRE---
export interface GenreObjectKeys {
   id: number, 
   name: string
} 
export interface Genre {
  genres: GenreObjectKeys[]
}
export interface TransformedGenreTypes {
   [key: number] : string;
}

// ---LANGUAGE---  
export interface Languages {
    iso_639_1: string,
    english_name: string,
    name: string,
}
export interface Languages_State_Types {
  languages: Languages[], 
  setLanguages: (value: Languages[]) => void
} 
interface TransformedLanguage_ValueObjectTypes {
   english: string,
   native: string
}
export interface TransformedLanguageTypes {
  [key: string] : TransformedLanguage_ValueObjectTypes;
} 

// ---Search Results--- 

export interface SearchResultState {
  searchResults: Movie[], 
  setSearchResults: Dispatch<SetStateAction<Movie[]>>
} 

// ---UI States--- 
export interface LoadingStateTypes {
  loading: boolean 
  setLoading: Dispatch<SetStateAction<boolean>>
}