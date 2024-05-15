import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import useTrendingMovies from "../hooks/useTrendingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browser = () => {
  const gptData = useSelector((store) => store.gpt.TogglesearchChange);
  console.log(gptData);

  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {gptData ? (
        <GptSearch />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browser;
