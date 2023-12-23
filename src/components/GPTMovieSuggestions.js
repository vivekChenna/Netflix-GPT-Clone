import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { gptMovies, tmdbMovieSearchSuggestions } = useSelector(
    (store) => store.gpt
  );

  if (!gptMovies) {
    return null;
  }

  return (
    <div className=" bg-gradient-to-b from-black mt-5">
      {gptMovies.map((movieName, index) => (
        <MovieList
          title={movieName}
          key={movieName}
          nowPlayingMovies={tmdbMovieSearchSuggestions[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
