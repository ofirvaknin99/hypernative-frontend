import { Spin, Typography } from "antd";
import { debounce } from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import FilterPanel from "../components/FilterPanel";
import VideoGrid from "../components/VideoGrid";
import { fetchVideos } from "../services/videoService";
import { Genre, Video, VideoResponse } from "../types/common";

const { Title } = Typography;

const VideoBrowserPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    try {
      const data: VideoResponse = await fetchVideos();
      setVideos(data.videos);
      setGenres(data.genres);
      setFilteredVideos(data.videos);
      setError(null);
    } catch (error) {
      setError("Failed to load videos. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchQuery(value);
      }, 300),
    []
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  useEffect(() => {
    let filteredVideos = [...videos];

    if (searchQuery) {
      const term = searchQuery.toLowerCase();
      filteredVideos = filteredVideos.filter((video) => {
        return String(video.title).toLowerCase().includes(term) || String(video.artist).toLowerCase().includes(term);
      });
    }

    if (selectedYear) {
      filteredVideos = filteredVideos.filter((video) => video.release_year === selectedYear);
    }

    if (selectedGenres.length > 0) {
      filteredVideos = filteredVideos.filter((video) => selectedGenres.includes(video.genre_id));
    }

    setFilteredVideos(filteredVideos);
  }, [searchQuery, selectedYear, selectedGenres, videos]);

  const years = Array.from(new Set(videos.map((video) => video.release_year))).sort();

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <Typography.Text type="danger">{error}</Typography.Text>
      </div>
    );
  }

  return (
    <div className="video-browser">
      <Title level={2}>Video Browser</Title>
      <FilterPanel years={years} genres={genres} onSearchChange={debouncedSearch} onYearChange={setSelectedYear} onGenresChange={setSelectedGenres} />
      {filteredVideos.length === 0 ? (
        <div className="no-videos-message">
          <Typography.Text>No videos were found</Typography.Text>
        </div>
      ) : (
        <VideoGrid videos={filteredVideos} />
      )}
    </div>
  );
};

export default VideoBrowserPage;
