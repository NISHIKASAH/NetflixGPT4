import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constant";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    if (!movieId) return;
    const url = `https://api.themoviedb.org/3/movie/${movieId}
      /videos?language=en-US`;
    const response = await fetch(url, OPTIONS);
    const data = await response.json();
    const filterData = data?.results.filter((x) => {
      return x.type === "Trailer";
    });
    const movietrailerdata = filterData[0];
    dispatch(addMovieTrailer(movietrailerdata));
  };
  useEffect(() => {
    fetchData();
  });
};
export default useMovieTrailer;
