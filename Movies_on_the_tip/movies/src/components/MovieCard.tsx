import React from "react";
import { Link } from "react-router-dom";


const imagePrefixUrl = "http://image.tmdb.org/t/p/w500";
function MovieCard(props:any) {
  const movie = props?.movie;
  return (
    <Link
      to={`/movie/${movie.id}`}
      target="_blank"
      
      title={movie?.title}
    >
      <img src={`${imagePrefixUrl}${movie?.poster_path}`} alt={movie?.title} />
      <p>{movie?.title}</p>
    </Link>
  );
}

export {MovieCard};