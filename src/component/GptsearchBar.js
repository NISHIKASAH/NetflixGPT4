import React from "react";
import { langConstant } from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openAi";

const GptsearchBar = () => {
  const multiLang = useSelector((store) => store.lang.changingLang);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const refValue = useRef(null);

  const handleSearchValue = async () => {
    console.log(refValue.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      refValue.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(result.choices);
  };
  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={langConstant[multiLang].placeholder}
          ref={refValue}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded"
          onClick={handleSearchValue}
        >
          {langConstant[multiLang].search}
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
