import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesCategory = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex">
          {movies &&
            movies.map((data, idx) => {
              return <MoviesCard key={idx} data={data} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default MoviesCategory;
