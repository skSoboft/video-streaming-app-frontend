import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

function WatchVideo() {
  const { filename } = useParams();

  return (
    <div>
      <h2>Watch Video</h2>
      <ReactPlayer
        url={`http://localhost:3001/videos/${filename}`}
        controls
        width="100%"
        height="100%"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    </div>
  );
}

export default WatchVideo;
