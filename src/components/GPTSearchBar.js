import { useRef } from "react";
import openai from "../utils/openAI";
import { useDispatch } from "react-redux";
import { Movies_Data_API_Options } from "../constants/constant";
import { addMoviesData } from "../redux/gptSlice";
const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const inputSearch = useRef(null);

  async function tmdbSearchMovies(movieName) {
    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`,
      Movies_Data_API_Options
    );
    let jsonData = await response.json();
    return jsonData.results;
  }

  const handleBtnClick = async () => {
    if (inputSearch.current.value === "") {
      return;
    }

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query :" +
      inputSearch.current.value +
      ". only give me names of 5 movies,comma separated like the example result given ahead.Example Result:Gadar , Koi Mil Gaya , Sholay , Don , Golmaal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log("inside open AI function");
    const gptMovieNames = gptResults.choices[0].message.content.split(",");

    const PromiseArray = gptMovieNames.map((movieName) =>
      tmdbSearchMovies(movieName)
    );

    const tmdbMoviesData = await Promise.all(PromiseArray);
    console.log(tmdbMoviesData);
    dispatch(
      addMoviesData({
        gptMovieNames: gptMovieNames,
        tmdbMoviesData: tmdbMoviesData,
      })
    );
  };

  return (
    <div className=" pt-[10%] flex items-center justify-center">
      <form onSubmit={(e) => e.preventDefault()} className=" flex gap-2 ">
        <input
          ref={inputSearch}
          type="text"
          placeholder="what would you like to watch today?"
          className=" w-96 rounded-lg py-2 px-4 outline-none font-semibold text-xl"
        />
        <button
          className=" text-white bg-red-500 p-3 font-bold text-xl rounded-lg "
          onClick={handleBtnClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
