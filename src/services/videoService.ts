import axios from "axios";
import { VideoResponse } from "../types/common";

const VIDEO_API_URL =
  process.env.REACT_APP_VIDEO_API_URL || "https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/main/data/dataset.json";

export const fetchVideos = async (): Promise<VideoResponse> => {
  try {
    const response = await axios.get(VIDEO_API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw error;
  }
};
