import { useParams } from "react-router-dom" 
import { useMovies }from '../hooks/useMovies'
import type Movie from "../types";
import { useEffect } from "react"; 
import type { GenreObjectKeys } from "../types"; 
import useTransformGenres from "../hooks/useTransformGenres";
import useTransformLanguage from "../hooks/useTransformLanguage"; 
import useCallAPIForMovieDetails from "../hooks/useCallAPIForMovieDetails";

interface Props {
  genres: GenreObjectKeys[]
}

const MoviePage = ({genres} : Props) => {
   const Params = useParams(); 
   const movies : Movie[] = useMovies();
   const id = Number(Params.id);

   const movie : Movie | undefined= useCallAPIForMovieDetails({id});
   const transformedGenres = useTransformGenres({genres});
   const transformedLanguages = useTransformLanguage();
   console.log(movie)

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []) 

   if(!movie && !transformedGenres && !movies) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white font-poppins px-6 py-8">

      {/* HERO SECTION */}
      <section className="relative rounded-xl overflow-hidden mb-10">

        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>

        <div className="relative flex flex-col lg:flex-row gap-8 p-8 items-center lg:items-end">

          {/* Poster */}
          <img
            src={`https://image.tmdb.org/t/p/w342/${movie?.poster_path}`}
            className="rounded-xl shadow-2xl w-64"
          />

          {/* Movie Info */}
          <div className="space-y-4 max-w-2xl">

            <h1 className="text-4xl font-bold">
              {movie?.title}
            </h1>

            <p className="text-gray-300">
              {movie?.overview}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-300">

              <span className="bg-gray-800 px-3 py-1 rounded-lg">
                Release: {movie?.release_date}
              </span>

              <span className="bg-gray-800 px-3 py-1 rounded-lg">
                Popularity: {movie?.popularity.toFixed(1)}
              </span>

              <span className="bg-gray-800 px-3 py-1 rounded-lg">
                Votes: {movie?.vote_count}
              </span>

            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS GRID */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {/* Rating */}
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition">
          <h2 className="text-gray-400 text-sm">Average Rating</h2>
          <span className="text-4xl font-bold text-yellow-400">
            ⭐ {movie?.vote_average.toFixed(1)}
          </span>
        </div>

        {/* Votes */}
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition">
          <h2 className="text-gray-400 text-sm">Total Votes</h2>
          <span className="text-3xl font-bold">
            {movie?.vote_count}
          </span>
        </div>

        {/* Popularity */}
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition">
          <h2 className="text-gray-400 text-sm">Popularity Score</h2>
          <span className="text-3xl font-bold text-indigo-400">
            {movie?.popularity.toFixed(0)}
          </span>
        </div>

        {/* Language */}
        <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transition">
          <h2 className="text-gray-400 text-sm">Original Language</h2>
          <span className="text-2xl font-bold uppercase">
           {`${transformedLanguages[movie?.original_language]?.english}/${transformedLanguages[movie?.original_language]?.native}`}
          </span>
        </div>

      </section>

      {/* EXTRA DETAILS */}
      <section className="grid lg:grid-cols-2 gap-8">

        {/* Genres */}
        <div className="bg-gray-800 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Genres
          </h2>

          <div className="flex flex-wrap gap-3">
            {movie?.genres?.map((genre) => { 
              console.log(genre)
              return <span
                key={genre.id}
                className="bg-indigo-600 px-3 py-1 rounded-lg text-sm"
              >
                {genre.name}
              </span>
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-800 rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Movie Stats
          </h2>

          <div className="space-y-3 text-gray-300">

            <div className="flex justify-between">
              <span>Adult Content</span>
              <span>{movie?.adult ? "Yes" : "No"}</span>
            </div>

            <div className="flex justify-between">
              <span>Video Available</span>
              <span>{movie?.video ? "Yes" : "No"}</span>
            </div>

            <div className="flex justify-between">
              <span>Original Title</span>
              <span>{movie?.original_title}</span>
            </div>

          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-12 text-gray-500 text-sm flex justify-center">
        Movie Analytics Dashboard
      </footer>

    </div>
  );
}


export default MoviePage