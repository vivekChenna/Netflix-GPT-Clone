import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movies_Data_API_Options } from "../constants/constant";
import { addUpComingMovies } from "../redux/moviesSlice";

export const useUpComingMovies = () => {
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const dispatch = useDispatch();
  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);

  const getUpComingMovies = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      Movies_Data_API_Options
    );

    let jsonData = await response.json();
    dispatch(addUpComingMovies(jsonData.results));
  };
};
