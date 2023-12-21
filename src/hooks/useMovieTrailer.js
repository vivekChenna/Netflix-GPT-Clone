import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Movies_Data_API_Options } from "../constants/constant";
import { addTrailerVideo } from "../redux/moviesSlice";

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const getMovieData = async (movieId) => {
    let response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      Movies_Data_API_Options
    );
    let jsonData = await response.json();
    console.log("printing particular movieData");
    const filterData = jsonData.results.filter((movieData) => {
      return movieData.type === "Trailer";
    });

    const trailerData = filterData.length ? filterData[0] : jsonData.results[0];
    dispatch(addTrailerVideo(trailerData));
    console.log(trailerData);
  };
};
