import { POSTER_IMG_CDN } from "../constants/constant";
const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return;
  }
  return (
    <div className=" w-32  md:w-48">
      <img
        className=" w-fit"
        src={POSTER_IMG_CDN + posterPath}
        alt="movie-img"
      />
    </div>
  );
};

export default MovieCard;
