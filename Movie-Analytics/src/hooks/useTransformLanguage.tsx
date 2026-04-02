import useLanguagesContext from './useLanguagesContext';
import type { Languages,TransformedLanguageTypes } from '../types';

const useTransformLanguage = () => {
    const { languages } = useLanguagesContext()
     
    const transformedLanguages = languages.reduce((acc:TransformedLanguageTypes, language:Languages) => {
         if(!acc[language.iso_639_1]) {

            acc[language.iso_639_1] = {
                english: language.english_name, 
                native: language.name
            }
         } 
         return acc;
    }, {}) 
    return transformedLanguages
}

export default useTransformLanguage