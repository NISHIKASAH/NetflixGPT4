import { useSelector } from "react-redux";
import TitleComponent from "./TitleComponent";
import VideoComponent from "./VideoComponent";
const MainComponent = () => {
  const movies = useSelector((store) => store.movies.nowPlaying);
  if (!movies) return;
  const movieDetail = movies[0];

  const { original_title, overview, id } = movieDetail;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <TitleComponent original_title={original_title} overview={overview} />
      <VideoComponent movieId={id} />
    </div>
  );
};

export default MainComponent;
