import type Movie from "../types";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import WatchlistButton from './WatchListButton'
import RemoveWatchListButton from "./RemoveWatchListButton";

interface Props {
  movie: Movie, 
  mode: string
}

const MovieCard = ({movie, mode} : Props) => {
  const navigate = useNavigate();

  return (
    <div  className="p-9 flex-none w-60 h-97 bg-gray-700 rounded-lg flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
     <div onClick={() => navigate(`/movie/${movie.id}`)}
    >
      <img src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
      
      <h2 className="font-poppins text-center">{movie.title}</h2>

      <h2 className="font-poppins font-bold text-yellow-500 flex justify-center">
        {movie.vote_average.toFixed(2)}
      </h2>

      <span className="text-xl font-bold text-gold-300 font-poppins flex justify-center">
        {movie.release_date}
      </span>
    </div> 
    <div>
      {mode.toLowerCase().trim() === "home" && <WatchlistButton movie={movie}/>}
      {mode.toLowerCase().trim() === "watchlist" && <RemoveWatchListButton movie={movie}/>}
       </div>
    </div>
  );
};

export default memo(MovieCard);