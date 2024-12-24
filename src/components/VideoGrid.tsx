import React from "react";
import { Video } from "../types/common";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <div key={video.id} className="video-grid-item">
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
