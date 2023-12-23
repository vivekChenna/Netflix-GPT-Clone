import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchPage from "./GPTSeachPage";
import { useSelector } from "react-redux";
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

  const showGPTPage = useSelector((store) => store.gpt.showGPTPage);
  return (
    <div className=" overflow-x-hidden">
      <Header />
      {showGPTPage ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
