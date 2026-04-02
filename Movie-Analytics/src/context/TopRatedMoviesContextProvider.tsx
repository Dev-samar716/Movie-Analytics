import { useState } from "react";
import type { ReactNode } from "react";
import topRatedMoviesContext from "./TopRatedMoviesContext";
import type Movie from "../types";

const TopRatedMoviesContextProvider = ({ children }: { children: ReactNode }) => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);

  return (
    <topRatedMoviesContext.Provider value={{ topRatedMovies, setTopRatedMovies }}>
      {children}
    </topRatedMoviesContext.Provider>
  );
};

export default TopRatedMoviesContextProvider;