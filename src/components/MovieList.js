import MovieCard from "./MovieCard";
const MovieList = ({ nowPlayingMovies, title }) => {
  return (
    <div className=" bg-black">
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      <h1>{title}</h1>
        <div className=" flex gap-3 ">
          {nowPlayingMovies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
