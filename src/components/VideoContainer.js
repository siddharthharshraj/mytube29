import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    setTimeout(async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      setLoading(false);
    }, 1000);
  };

  const renderVideos = () => {
    if (loading) {
      return Array.from({ length: 10 }, (_, n) => (
        <div
          key={n}
          className="w-full border-gray-500 rounded overflow-hidden bg-gray-300 shadow-md m-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Skeleton height={250} color="#b1b1b1" />{" "}
          {/* Adjusted color to more gray */}
          <div className="px-4 py-2">
            <Skeleton count={10} color="#b1b1b1" />{" "}
            {/* Adjusted color to more gray */}
          </div>
        </div>
      ));
    } else {
      return videos.map((video) => (
        <Link
          key={video.id}
          to={"/watch?v=" + video.id}
          className="w-full border-gray-200 rounded overflow-hidden shadow-md m-2 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
        >
          <VideoCard info={video} />
        </Link>
      ));
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {renderVideos()}
      </div>
    </div>
  );
};

export default VideoContainer;
