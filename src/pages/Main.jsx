import React, { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

//! arama yapıldığında kullanılacak url
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const[search,setSearch]=useState("")

  const {movie,getMovies}=useContext(MovieContext)


const handleSubmit=(e)=>{
e.preventDefault()
getMovies(SEARCH_API+search)
}

  return (
    <>
      <form className="flex justify-center p-2" 
      onSubmit={handleSubmit}
      >
        <input
          type="search"
          className="w-80 h-8 rounded-md p-1 m-2"
          placeholder="Search a movie..."
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button className="btn-danger-bordered" type="submit">
          Search
        </button>
      </form>
      <div className="flex justify-center flex-wrap">
            {/* {"" ? (
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600 mt-52"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
        ""
        )} */}
     {movie.map((a)=><MovieCard key={a.id} {...a} />)}
      </div>
    </>
  );
};

export default Main;

