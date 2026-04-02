import type { MovieResponse, Genre, Languages } from "../types";

const API_KEY : string = '590f7bbad44ffe32d330b2dd20332600';

const fetchMovieData = async() => {
    try {
     const response = await Promise.all([
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`, {
            method: 'GET'
        }), 
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`, {
            method: 'GET'
        }), 
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`, {
            method: 'GET'
        }), 
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`, {
            method: 'GET'
        }), 
        fetch(`https://api.themoviedb.org/3/configuration/languages?api_key=${API_KEY}`)
     ]); 

     response.forEach((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error: ${res.status}`);
    }
  });

     const [trending, popular, topRated, genres, languages] = await Promise.all([
        response[0].json() as Promise<MovieResponse>, 
        response[1].json() as Promise<MovieResponse>, 
        response[2].json() as Promise<MovieResponse>, 
        response[3].json() as Promise<Genre>,
        response[4].json() as Promise<Languages[]>
     ]);

     return {trending, popular, topRated, genres, languages};

    } catch(err) {
        console.log(err);
        throw err;
    }
} 

export const fetchSearchedMovieData = async({searchQuery} : {searchQuery: string}) => {
        try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`,{
        method: "GET"
    }) 

    if(!response.ok) {
        throw new Error(`Something went wrong! Error status: ${response.status}`)
    } 

    return await response.json()
    
        } catch(error : unknown) {
            console.log(error)
            throw new Error(`Something went wrong while fetching data!`)
        }
} 

export const fetchMovieById = async({id} : {id : number}) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`, {
            method: "GET"
        }) 

        if(!response.ok) {
        throw new Error(`Something went wrong! Error status: ${response.status}`)
    } 

    return await response.json()
    
        } catch(error : unknown) {
            console.log(error)
            throw new Error(`Something went wrong while fetching data!`)
        }
    }

export default fetchMovieData; 