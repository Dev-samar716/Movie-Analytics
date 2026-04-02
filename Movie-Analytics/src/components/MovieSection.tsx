import MovieCard from "./MovieCard";
import type Movie from "../types";  

interface Props {
  movies: Movie[], 
  title: string
}

const MovieSection = ({movies, title} : Props) => {
  return (
    <div className="p-4">
      <h2 className="font-poppins text-2xl font-semibold mb-4">
        {title}
      </h2>

      <div className="flex overflow-x-auto space-x-4 pb-2">
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
}

export default MovieSection;