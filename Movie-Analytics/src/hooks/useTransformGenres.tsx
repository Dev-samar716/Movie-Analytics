import type { GenreObjectKeys, TransformedGenreTypes } from '../types'  
import { useMemo } from 'react';


const useTransformGenres = ({genres} : {genres: GenreObjectKeys[]}) => {
  const transformedGenres = useMemo(() => {
     return genres.reduce((acc: TransformedGenreTypes, genre : GenreObjectKeys) => {
         if(!acc[genre.id]) {
            acc[genre.id] = genre.name;
         } 
         return acc;
  }, {}); 
  }, [genres])
  return transformedGenres;
}

export default useTransformGenres