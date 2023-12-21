import React from "react";
import {useSelector} from 'react-redux'
import MovieList from "./MovieList";


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return <div className="">
    <MovieList title={"Now Playing"} nowPlayingMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Now Playing"} nowPlayingMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Now Playing"} nowPlayingMovies={movies?.nowPlayingMovies} />
    <MovieList title={"Now Playing"} nowPlayingMovies={movies?.nowPlayingMovies} />
  </div>;
};

export default SecondaryContainer;
