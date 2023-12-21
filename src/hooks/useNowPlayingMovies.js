import { useEffect } from "react";
import { Movies_Data_API_Options } from "../constants/constant";
import {useDispatch} from 'react-redux'
import {addNowPlayingMovies} from '../redux/moviesSlice'

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  });

  async function getNowPlayingMovies() {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      Movies_Data_API_Options
    );
    let jsonData = await response.json();
    console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  }
};
