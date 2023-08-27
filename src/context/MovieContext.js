import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"

export const MovieContext = createContext()
const API_KEY = process.env.REACT_APP_TMDB_KEY  || 'mock_key';
const FULL_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;



const MovieContextProvider = ({children}) => {
   const [movie, setMovie] = useState([])

useEffect(() => {
    getMovies(FULL_API);
},[])
    
    const getMovies=(url) => {
        axios.get(url).then((res)=>setMovie(res.data.results))
    }
  return (
    <MovieContext.Provider value={{movie,getMovies}}>
        {children}
    </MovieContext.Provider>
  )
}

export default MovieContextProvider