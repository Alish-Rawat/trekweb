import React from "react";
import trek from "../images/trekbg.jpg";
import downarrow from "../images/down-arrow.png";

const Body = () => {
  return (
    <div className="bg-blue-600 w-[100%] ">
      <div className="absolute  right-[23%] bottom-[43%] ">
        <h2 className="text-white text-6xl m-2 font-semibold">Wonderers</h2>
        <p className="text-blue-50 mt-2 mx-4 text-xl">You Live only Once,</p>
        <p className="text-blue-50 mx-4 text-xl">So Live to The Fullest.</p>
        <button className="bg-blue-600  px-6 py-2 m-4 font-bold text-white animate-pulse">
          EXPLORE
        </button>
      </div>
      <div className=" absolute right-[50%] bottom-[8%] w-8 animate-bounce">
        <img src={downarrow} alt="down" srcset="" />
      </div>
      <img className="w-[100%]" src={trek} alt="imggg" srcset="" />
    </div>
  );
};

export default Body;
