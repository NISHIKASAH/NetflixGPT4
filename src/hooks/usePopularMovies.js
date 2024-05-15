import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR_URL } from "../utils/constant";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularData = async () => {
    const response = await fetch(POPULAR_URL, OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovies(data?.results));
  };
  useEffect(() => {
    getPopularData();
  });
};

export default usePopularMovies;
