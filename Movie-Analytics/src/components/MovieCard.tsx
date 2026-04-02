import type Movie from "../types";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({movie} : {movie: Movie}) => {
  const navigate = useNavigate();

  return (
    <div
    onClick={() => navigate(`/movie/${movie.id}`)}
      className="p-9 flex-none w-60 h-97 bg-gray-700 rounded-lg flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
      
      <h2 className="font-poppins text-center">{movie.title}</h2>

      <h2 className="font-poppins font-bold text-yellow-500">
        {movie.vote_average.toFixed(2)}
      </h2>

      <span className="text-xl font-bold text-gold-300 font-poppins">
        {movie.release_date}
      </span>
    </div>
  );
};

export default memo(MovieCard);