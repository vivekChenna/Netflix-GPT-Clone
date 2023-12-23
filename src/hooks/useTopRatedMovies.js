import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movies_Data_API_Options } from "../constants/constant";
import { addTopRatedMovies } from "../redux/moviesSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.TopRatedMovies);
  useEffect(() => {
    // this will be only called when topRated movies is null !topRatedMovies means null
    !topRatedMovies && getTopRatedMovies();
  }, []);

  const getTopRatedMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      Movies_Data_API_Options
    );

    let jsonData = await response.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };
};
