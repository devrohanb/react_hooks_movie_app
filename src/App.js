import React, { useState, useEffect } from "react";
import Movie from "./components/Movie";

// TODO: API links :
const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e08dc74dbbfe0b96ad8d8f7a4699b50b&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w500";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=e08dc74dbbfe0b96ad8d8f7a4699b50b&query=";

function App() {
  //TODO: states :
  const [movies, setMovies] = useState([]);

  //TODO: useEffect hook which is having a empty array as a second parameter to render it only once:
  useEffect(async () => {
    //TODO: Using FETCH API :
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return <div>{movies.length > 0 && movies.map((movie) => <Movie />)}</div>;
}

export default App;
