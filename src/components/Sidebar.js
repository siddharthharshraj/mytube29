import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-52">
      {/* Main Navigation */}
      <ul className="space-y-2">
        <li className="py-1">
          <Link
            to="/"
            className="text-gray-900 hover:text-red-600 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Shorts
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Videos
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Live
        </li>
      </ul>

      {/* Subscriptions */}
      <h1 className="font-bold text-xl mt-6 mb-2">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Music
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Sports
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Gaming
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Movies
        </li>
      </ul>

      {/* Watch Later */}
      <h1 className="font-bold text-xl mt-6 mb-2">Watch Later</h1>
      <ul className="space-y-2">
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Music
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Sports
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Gaming
        </li>
        <li className="py-1 text-gray-700 hover:text-red-600 transition duration-300">
          Movies
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
