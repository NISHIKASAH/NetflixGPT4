import React from "react";
import { IMG_URL } from "../utils/constant";

const MoviesCard = ({ data }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img src={IMG_URL + data.poster_path} alt="images" />
    </div>
  );
};

export default MoviesCard;
