import MovieCard from "./MovieCard";
const MovieList = ({ nowPlayingMovies, title }) => {
  return (
    <div className="pl-6 pr-2 relative z-10">
      <h1 className=" text-white  font-semibold text-4xl pb-2">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <div className=" flex gap-5 pb-4">
          {nowPlayingMovies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
