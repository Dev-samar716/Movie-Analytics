import useTrendingMoviesContext from '../hooks/useTrendingMoviesContext';
import { memo } from 'react'; 
import type Movie from '../types';

const FeaturedSection = () => {
  const { trendingMovies } = useTrendingMoviesContext()
  const movies : Movie[] = trendingMovies.sort((a,b) => b.vote_average - a.vote_average)
  return (
     <div className="relative flex-2 rounded-xl overflow-hidden bg-gray-800 group aspect-video">
        { movies && movies.length > 0 ? (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w780/${movies[0].backdrop_path}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col space-y-2">
              <h2 className="text-3xl font-bold font-poppins">
                {movies[0].title}
              </h2>

              <div className="flex items-center space-x-3 text-sm font-poppins">
                <span className="text-yellow-400 font-semibold">
                  ⭐ {movies[0].vote_average.toFixed(1)}
                </span>

                <span className="text-gray-300">
                  {movies[0].release_date.split("-")[0]}
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            Featured / Top Trending
          </div>
        )}
      </div>
  );
};

export default memo(FeaturedSection);