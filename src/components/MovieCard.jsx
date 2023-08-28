import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { toastWarnNotify } from "../helpers/TostNotify";
import { AuthContex } from "../context/AuthContext";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage = "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";


const MovieCard = ({ poster_path, title, overview, vote_average, id }) => {


  const { currentUser } = useContext(AuthContex);
  const navigate = useNavigate();

  const getVoteClass = (vote) => { 
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };
  return (
    <div
      className="movie"
      onClick={() => {
        navigate("details/" + id);
        !currentUser && toastWarnNotify("please log in to see details");
      }}
    >
      <img
        loading="lazy"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        //src={IMG_API + poster_path || defaultImage}
        alt="movie-card"
      />
      <div className="flex align-baseline justify-between p-1 text-white">
        <h5>{title}</h5>
        {currentUser && (
          <span className={`tag ${getVoteClass(vote_average)}`}>
            {vote_average.toFixed(1)}
          </span>
        )}
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
