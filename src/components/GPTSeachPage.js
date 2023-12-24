import GPTSearchBar from "./GPTSearchBar";
import { BG_IMG } from "../constants/constant";
import GPTMovieSuggestions from "./GPTMovieSuggestions";

const GPTSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG_IMG} alt="bg-img" className=" h-screen object-cover md:h-full" />
      </div>
      <div className=" pt-[40%] md:p-0">
        <GPTSearchBar />
        <GPTMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearchPage;
