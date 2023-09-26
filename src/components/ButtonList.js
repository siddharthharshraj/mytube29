import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ButtonList = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="grid grid-flow-col dark:bg-zinc-900">
      <MdChevronLeft
        className="hover:scale-150 my-auto opacity-50 "
        size={30}
        onClick={slideLeft}
        aria-hidden="true"
      />
      <div
        id="slider"
        className="flex h-18 m-2 overflow-hidden whitespace-nowrap scroll-smooth"
      >
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            All
          </button>
        </div>
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Games
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Music
          </button>
        </div>
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Live
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Comedy
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            AstroJS
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            React-redux
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            OnePlus
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Musicals
          </button>
        </div>
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Trending
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Raftaar
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Drama
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Arijit Singh
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Google
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            ReactJS
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            SRK
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Iphone14pro
          </button>
        </div>
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Poland
          </button>
        </div>
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Siddharth
          </button>
        </div>
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            PowerBI
          </button>
        </div>
        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            PySpark
          </button>
        </div>

        <div>
          <button className="bg-slate-100 dark:bg-zinc-500 rounded-full shadow-md hover:scale-110 inline-block font-normal m-2 py-1 px-3">
            Top 50
          </button>
        </div>
      </div>
      <MdChevronRight
        className="hover:scale-150 my-auto opacity-50 "
        size={30}
        onClick={slideRight}
        aria-hidden="true"
      />
    </div>
  );
};

export default ButtonList;
