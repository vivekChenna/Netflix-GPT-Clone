import { POSTER_IMG_CDN } from "../constants/constant";
const MovieCard = ({ posterPath }) => {
  return (
    <div className=" w-44">
      <img className=" w-full" src={POSTER_IMG_CDN + posterPath} alt="movie-img" />
    </div>
  );
};

export default MovieCard;
