import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setshowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-3 m-2 shadow-lg">
      <div className="col-span-12 sm:col-span-2 flex items-center justify-between cursor-pointer space-x-2">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 w-8"
          alt="menu"
          src="https://banner2.cleanpng.com/20180628/zaz/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg"
        />
        <div className="flex items-center space-x-2">
          <svg
            className="h-8 w-8"
            viewBox="0 0 24 24"
            fill="#FF0000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.498 6.186a2.833 2.833 0 0 0-2.019-2.019C19.78 4 12 4 12 4s-7.78 0-9.479.167a2.833 2.833 0 0 0-2.019 2.019C.167 8.905.167 12 .167 12s0 3.094.335 5.813a2.833 2.833 0 0 0 2.019 2.019c1.699.168 9.479.168 9.479.168s7.78 0 9.479-.168a2.833 2.833 0 0 0 2.019-2.019C23.833 15.094 24 12 24 12s-.167-3.094-.502-5.814z" />
            <path
              d="M9.732 15.468V8.534l6.534 3.467-6.534 3.467z"
              fill="#fff"
            />
          </svg>
          <h2 className="font-bold text-2xl text-red-600">YOUTUBE</h2>
        </div>
      </div>

      <div className="col-span-12 sm:col-span-8 px-10 relative">
        <div className="flex">
          <input
            className="flex-grow px-5 border border-gray-400 p-2 rounded-l-full focus:outline-none"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 bg-gray-100 rounded-r-full focus:outline-none">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white mt-2 px-2 w-[28rem] sm:w-full shadow-lg rounded-lg border border-gray-100 z-10">
            <ul>
              {suggestions.map((s, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-12 sm:col-span-2 flex justify-end">
        <img
          className="h-9"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4za-gwBM2h9DeD08Vz3NmcPzrbNo4fLDS6g&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
