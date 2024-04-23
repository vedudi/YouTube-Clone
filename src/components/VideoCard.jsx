import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow }) => {
  const [isHover, setIsHover] = useState(false);

  const navigate = useNavigate();

  if (video.type !== "video") return;
  return (
    <div
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? "row" : ""} cursor-pointer`}
    >
      <div className="">
        <img
          src={
            isHover && video.richThumbnail
              ? video?.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt=""
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="flex gap-4 mt-5">
        <img
          src={video.channelThumbnail && video.channelThumbnail[0].url}
          alt=""
          className="w-14 h-14 rounded-full c-pic"
        />
        <div>
          <h4 className="font-bold line-clamp-2">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-3">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)}</span>
              <span className="text">Görüntüleme</span>
            </p>
            *
            <p className="whitespace-nowrap text-[14px]">
              {video.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
