import { useSelector } from "react-redux";
import MoviesCategory from "./MoviesCategory";

const SecondaryComponent = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlaying && (
      <div className="bg-black ">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MoviesCategory title={"Now playing"} movies={movies.nowPlaying} />
          <MoviesCategory
            title={"Trending movies"}
            movies={movies.TrendingMovies}
          />
          <MoviesCategory
            title={"Upcoming movies"}
            movies={movies.PopularMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryComponent;
