import React, { forwardRef } from "react";
import "./Videocard.css";
import TextTrun from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const base_url = "https://image.tmdb.org/t/p/original/";

const Videocard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />

      <div className="videoCard--internal">
        <TextTrun line={2} truncateText="..." text={movie.overview} />
        <h2>
          {movie.title || movie.original_name}{" "}
          {` (${movie.release_date || movie.first_air_date})`}
        </h2>
        <p>{movie.media_type && `${movie.media_type} `}</p>
        <ThumbUpIcon />
        {` ${movie.vote_count}`}
      </div>
    </div>
  );
});

export default Videocard;
