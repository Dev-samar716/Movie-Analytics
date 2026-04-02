import { createContext } from "react";
import type { TrendingMoviesState } from "../types";

const trendingMoviesContext = createContext<TrendingMoviesState | undefined>(undefined);

export default trendingMoviesContext;