import { AiOutlineMenuUnfold } from "react-icons/ai";
import React, { useState } from "react";
import img from "../picture/click&collect-logo.png";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  return (
    <nav
      className={`flex flex-row items-center justify-between shadow-sm ${
        mobileView === false ? "h-[230px]" : "h-[80px]"
      } lg:h-[80px]  px-3 z-30 relative`}>
      <div className="flex absolute top-2">
        <img src={img} alt="" className="h-[50px] w-[100px] " />
      </div>

      <div className="flex bg-gray-400 mr-4 sm:block  lg:hidden absolute end-4 top-2 rounded-sm hover:scale-105">
        <button
          className="h-[40px]  "
          onClick={() => setMobileView(!mobileView)}>
          <AiOutlineMenuUnfold size="30px" />
        </button>
      </div>

      <div
        className={`w-full lg:w-auto  lg:absolute lg:top-3 lg:end-12 ${
          mobileView && "hidden"
        } lg:block p-0 lg:p-4  `}>
        <ul className="flex flex-col lg:flex-row space-y-1 lg:space-y-0 lg:space-x-3 mt-[25px] lg:mt-2 font-mono   ">
          <li className="block lg:inline-block bg-violet-800        hover:text-white     text-xl    hover:bg-pink-800  px-2  rounded-sm ">
            <a href="#">Home</a>
          </li>
          <li className="block lg:inline-block      hover:bg-pink-800 hover:text-white            text-xl hover:text-gray   px-2  rounded-sm  ">
            <a href="#">Shop</a>
          </li>
          <li className="block lg:inline-block                      hover:bg-pink-800 text-xl hover:text-white    px-2 rounded-sm">
            <a href="#">About us</a>
          </li>
          <li className="block lg:inline-block                      hover:bg-pink-800 text-xl    px-2 rounded-sm hover:text-white">
            <a href="#">policy</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
