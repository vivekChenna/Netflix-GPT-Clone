import { useEffect } from "react";
import { Movies_Data_API_Options } from "../constants/constant";

const VideoBackground = ({ movieId }) => {
  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
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

    console.log(trailerData.key);
  };

  return (
    <div className=" w-screen" >
      <iframe className=" w-screen aspect-video"
        src="https://www.youtube.com/embed/4GPvYMKtrtI?autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
