import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const formatViewCount = (count) => {
    if (count >= 1_000_000) {
      return `${(count / 1_000_000).toFixed(1)}M views`;
    } else if (count >= 1_000) {
      return `${(count / 1_000).toFixed(1)}K views`;
    } else {
      return `${count} views`;
    }
  };

  return (
    <div className="p-4 m-2 w-72 h-auto bg-gray-50 shadow-lg rounded-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        className="rounded-lg w-full h-40 object-cover mb-3"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul className="space-y-1">
        <li className="font-bold text-gray-700 truncate">{title}</li>
        <li className="text-sm text-gray-500 truncate">{channelTitle}</li>
        <li className="text-xs text-gray-400">
          {formatViewCount(statistics.viewCount)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
