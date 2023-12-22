import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpComingMovies,
} from "../hooks/constant";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div className=" overflow-x-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
