import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return movies.nowPlayingMovies ? (
    <div className=" bg-black">
      <div className=" -mt-60">
        <MovieList
          title={"Now Playing"}
          nowPlayingMovies={movies?.nowPlayingMovies}
        />
        <MovieList title={"Popular"} nowPlayingMovies={movies?.popularMovies} />
        <MovieList
          title={"Top Rated"}
          nowPlayingMovies={movies?.TopRatedMovies}
        />
        <MovieList
          title={"UpComing"}
          nowPlayingMovies={movies?.upComingMovies}
        />
      </div>
    </div>
  ) : null;
};

export default SecondaryContainer;
