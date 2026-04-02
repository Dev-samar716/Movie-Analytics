import { createContext } from "react";
import type { TopRatedMoviesState } from "../types";

const topRatedMoviesContext = createContext<TopRatedMoviesState | undefined>(undefined);

export default topRatedMoviesContext;