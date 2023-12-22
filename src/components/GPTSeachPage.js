import GPTSearchBar from "./GPTSearchBar";
import { BG_IMG } from "../constants/constant";

const GPTSearchPage = () => {
  return (
    <div>
      <div className=" absolute -z-20">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <GPTSearchBar />
    </div>
  );
};

export default GPTSearchPage;
