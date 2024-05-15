import { useEffect } from "react";
import { addTredingMovies } from "../utils/movieSlice";
import { OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTredingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      OPTIONS
    );
    const data = await response.json();
    dispatch(addTredingMovies(data?.results));
  };
  useEffect(() => {
    getTredingMovies();
  }, []);
};

export default useTrendingMovies;
