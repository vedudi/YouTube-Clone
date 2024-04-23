import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import VideoCard from "../components/VideoCard";
import { VideoContext } from "../context/videoContext";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Feed = () => {
  const { videos, isLoading, error } = useContext(VideoContext);

  return (
    <div className="flex">
      <Sidebar />
      <div className="videos">
        {isLoading ? (
          <Loader/>
        ) : error ? (
          <Error message={error}/>
        ) : (
          videos?.map(
            (item) =>
              item.type === "video" && (
                <VideoCard key={item.videoId} video={item} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
