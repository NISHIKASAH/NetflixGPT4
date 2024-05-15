import React from "react";
import GptsearchBar from "./GptsearchBar";
import GptSearchList from "./GptSearchList";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="background" />
      </div>
      <div>
        <GptsearchBar />
        <GptSearchList />
      </div>
    </>
  );
};

export default GptSearch;
