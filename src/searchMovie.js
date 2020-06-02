import React, { useState, useEffect } from "react";
import MovieCard from "./movieCard";

export default function SearchMovies() {
  query = "Jurassic Park";
  const url = `https://api.themoviedb.org/3/search/movie?api_key=ba43e24afcb39d1839ef279e38ef7ed0&language=en-US&query=${query}&page=1&include_adult=false`;
  //states- input query, movies
  let [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);
  //  useEffect(()=>{
  //    fetch(url)
  //    .then(respons => respons.json())
  //    .then(jsonRespons => setMovies(jsonRespons.results))
  //  },[])

  const searchMovies = async e => {
    e.preventDefault();
    console.log("submitting");
    try {
      const res = await fetch(url);
      const data = await res.json();
      //results return array
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter(movie => movie.poster_path)
          .map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}
