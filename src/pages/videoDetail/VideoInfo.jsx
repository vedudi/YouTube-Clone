import millify from "millify";
import { useState } from "react";

const VideoInfo = ({ video }) => {
  const date = new Date(video.publishDate).toLocaleDateString("tr", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const [isFull, setIsFull]=useState(false)
  const detay= isFull ? video.description : video.description.slice(0,100)+'...daha fazla '
  return (
    <div onClick={()=>setIsFull(!isFull)} className="bg-zinc-700 rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80">
      <div className="flex gap-4 mb-2">
        <p>{millify(video.viewCount)} review</p>
        <p>{date}</p>
      </div>
      <p>
        {detay.split("\n").map((line, key) => (
          <span key={key}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoInfo;
