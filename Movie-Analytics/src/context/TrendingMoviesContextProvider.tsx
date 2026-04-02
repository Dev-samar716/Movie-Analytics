import { useState } from "react";
import type { ReactNode } from "react";
import trendingMoviesContext from "./TrendingMoviesContext";
import type Movie from "../types";

const TrendingMoviesContextProvider = ({ children }: { children: ReactNode }) => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  return (
    <trendingMoviesContext.Provider value={{ trendingMovies, setTrendingMovies }}>
      {children}
    </trendingMoviesContext.Provider>
  );
};

export default TrendingMoviesContextProvider;