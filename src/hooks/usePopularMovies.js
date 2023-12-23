import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movies_Data_API_Options } from "../constants/constant";
import { addPopularMovies } from "../redux/moviesSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      Movies_Data_API_Options
    );

    let jsonData = await response.json();
    dispatch(addPopularMovies(jsonData.results));
  };
};
