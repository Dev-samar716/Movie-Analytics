import { createContext } from "react";
import type { PopularMoviesState } from "../types";

const popularMoviesContext = createContext<PopularMoviesState | undefined>(undefined);

export default popularMoviesContext;