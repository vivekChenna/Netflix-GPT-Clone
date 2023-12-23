import GPTSearchBar from "./GPTSearchBar";
import { BG_IMG } from "../constants/constant";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearchPage = () => {
  return (
    <div>
      <div className=" fixed -z-20">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions/>
    </div>
  );
};

export default GPTSearchPage;
