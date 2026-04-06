import type { GenreObjectKeys } from "../types";
import ModernSearchBar from "./SearchBar"; 
import type { Dispatch, SetStateAction } from "react";
import { Link } from 'react-router-dom'

interface Props {
  filteredGenres: GenreObjectKeys[], 
  selectedGenre: string[], 
  setSelectedGenre: Dispatch<SetStateAction<string[]>>;
  title: string
}

const Header = ({filteredGenres, selectedGenre, setSelectedGenre, title} : Props) => { 

  return (
    <header className="flex flex-col space-y-6">
      
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-4 md:gap-8">
          <h1 className="font-poppins text-3xl font-bold font-poppins whitespace-nowrap">
            {title}
          </h1>
        </div>

        <div className="w-[50%]">
          <ul className="flex gap-8 p-4 justify-center">
            <li>
            <Link to="/" className="font-poppins text-white-500 hover:bg-gray-600 p-3
          hover:text-blue-400">
             Home
            </Link>
          </li>
        <li>
          <Link to="/watch-list" className="font-poppins text-white-500 hover:bg-gray-600 p-3
          hover:text-blue-400">
        WatchList
        </Link>
        </li>
        <li>
          <Link to="/favourites" className="font-poppins text-white-500 hover:bg-gray-600 p-3
          hover:text-blue-400">
        Favourites
        </Link>
        </li>
          </ul>
        </div>

        {/* Search */}
        {title.split(" ").includes("Analytics") &&  <ModernSearchBar />}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-gray-700 pt-4">
        {filteredGenres.map((genre) => {
          const isSelected = selectedGenre.includes(String(genre.id));
          return <span
            key={genre.id}
            className={`
                    cursor-pointer px-3 py-1.5 rounded-full text-sm font-medium
                    transition-all duration-300 border
                    ${isSelected 
                      ? "bg-indigo-600 text-white border-indigo-500 shadow-sm scale-105" 
                      : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700 hover:text-white"}
                  `}
            onClick={() => setSelectedGenre((prev : string[]) => {
              if(!isSelected) {
                return [...prev, String(genre.id)];
              } else {
                return prev.filter(value => value != String(genre.id)); 
              }
            })}
          >
            {genre.name}
          </span>
         })}
      </div>

    </header>
  );
};

export default Header;