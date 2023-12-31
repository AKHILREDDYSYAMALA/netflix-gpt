import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-sceen aspect-video pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-2 my-4 md:my-0 md:p-4 px-4 md:px-16 text-lg rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className=" hidden md:inline-block bg-black text-white p-4 px-16 text-lg rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
