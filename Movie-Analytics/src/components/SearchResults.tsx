// components/SearchResults.tsx
import MovieCard from "./MovieCard";
import useLoading from "../hooks/useLoading";
import type Movie from '../types'

const SearchResults = ({filteredSearchResults} : {filteredSearchResults : Movie[]}) => {
  const { loading } = useLoading();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-500"></div>
      </div>
    );
  }

  if (!filteredSearchResults || filteredSearchResults.length === 0) {
    return (
      <div className="text-gray-400 text-center py-10 text-lg">
        No results found.
      </div>
    );
  }

  return (
    <section className="space-y-8">
      <h2 className="font-poppins text-2xl font-semibold mb-4">
        Search Results
      </h2>
      <div className="flex flex-wrap gap-6">
        {filteredSearchResults.map((movie : Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;