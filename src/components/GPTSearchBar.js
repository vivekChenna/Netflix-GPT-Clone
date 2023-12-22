const GPTSearchBar = () => {
  return (
    <div className=" pt-[11%] flex items-center justify-center">
      <form onSubmit={(e) => e.preventDefault()} className=" flex gap-2 ">
        <input
          type="text"
          placeholder="what would you like to watch today?"
          className=" w-96 rounded-lg py-2 px-4 outline-none font-semibold text-xl"
        />
        <button className=" text-white bg-red-500 p-3 font-bold text-xl rounded-lg ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
