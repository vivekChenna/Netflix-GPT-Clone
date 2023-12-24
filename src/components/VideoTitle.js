import React from "react";
import { GrPlayFill } from "react-icons/gr";
import { AiOutlineInfoCircle } from "react-icons/ai";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[31.7%] pl-2 pr-14 absolute bg-gradient-to-r from-gray-900 aspect-video md:pt-[19%] md:px-10">
      <p className="text-lg font-semibold mb-3 text-white md:text-4xl md:font-bold">
        {title}
      </p>
      <p className=" hidden w-1/3 font-semibold mb-3 text-white text-lg md:inline-block">
        {overview}
      </p>
      <div className=" flex gap-2 md:gap-5">
        <button className="flex items-center bg-white text-sm font-semibold text-black rounded-md hover:bg-opacity-80 p-1 md:text-2xl md:gap-2">
          <GrPlayFill
            color="black"
            fontSize="1rem"
            className=" text-lg md:text-2xl"
          />
          Play
        </button>
        <button className="flex items-center gap-2 text-sm bg-zinc-400 font-semibold text-white rounded-md p-1 md:text-2xl">
          <AiOutlineInfoCircle
            color="white"
            fontSize="1rem"
            className=" text-lg md:text-2xl"
          />{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
