import React from "react";
import { Video } from "../types/common";

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  return (
    <div className="custom-video-card">
      <div className="card-image-container">
        <img src={video.image_url} alt={video.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{video.title}</h3>
        <div className="card-details">
          <span className="artist">{video.artist}</span>
          <span className="year">{video.release_year}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
