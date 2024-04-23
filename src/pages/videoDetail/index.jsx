import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import Loader from "../../components/Loader";
import VideoCard from "../../components/VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comment, setComment] = useState(null);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));
    api.get(`/comments?id=${id}`).then((res) => setComment(res.data));
  }, [id]);

  return (
    <div className="detail-page h-screen overflow-auto p-[20px] md:p-[40px] lg:px-[50px] xl:px-[100px]">
      <div className="">
        <div className="h-[30vh] md:h-[50vh] lg:h-[60vh]">
          <ReactPlayer
            controls
            width={"100%"}
            height={"100%"}
            url={`https://www.youtube.com/watch?v=${id}`}
          />
        </div>
        {!video || !comment ? (
          <p>
            {" "}
            <Loader />{" "}
          </p>
        ) : (
          <>
            <ChannelInfo video={video} />
            <VideoInfo video={video} />
            <Comments data={comment} />
          </>
        )}
      </div>
      <div className="wrapper flex flex-col gap-5 m-5">
        {video?.relatedVideos.data.map((item) => (
          <VideoCard isRow={true} key={item.videoId} video={item} />
        ))}
      </div>
    </div>
  );
};

export default VideoDetail;
