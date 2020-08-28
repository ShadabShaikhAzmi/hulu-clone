import React from "react";
import "./Navbar.css";
import Key from "./Key";

function Navbar({ setselectedOption }) {
  return (
    <div className="navbar">
      <h2 onClick={() => setselectedOption(Key.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setselectedOption(Key.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setselectedOption(Key.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => setselectedOption(Key.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => setselectedOption(Key.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setselectedOption(Key.fetchRomanceMovies)}>Romance</h2>
      <h2 onClick={() => setselectedOption(Key.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setselectedOption(Key.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setselectedOption(Key.fetchWestern)}>Western</h2>
      <h2 onClick={() => setselectedOption(Key.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => setselectedOption(Key.fetchTv)}>Movie</h2>
    </div>
  );
}

export default Navbar;
