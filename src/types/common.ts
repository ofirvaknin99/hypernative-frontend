export interface Genre {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  artist: string;
  title: string;
  genre_id: number;
  release_year: number;
  image_url: string;
}

export interface VideoResponse {
  videos: Video[];
  genres: Genre[];
}
