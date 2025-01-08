import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="border flex bg-[#421e27] text-white shadow-lg">
        <p className="border m-2 p-2 w-[20%] shadow-lg">LOGO</p>
        <h1 className="flex justify-between items-center border w-[80%] px-2 ">
          <Link to={"/"}>
            <p className="cursor-pointer hover:bg-white py-2 px-3 rounded-3xl hover:text-[#421e27] delay-75">
              HOME
            </p>
          </Link>
          <p className="cursor-pointer hover:bg-white py-2 px-3 rounded-3xl hover:text-[#421e27] delay-75">
            TREKS
          </p>
          <p className="cursor-pointer hover:bg-white py-2 px-3 rounded-3xl hover:text-[#421e27] delay-75">
            About
          </p>
          <p className="cursor-pointer hover:bg-white px-3 py-2 rounded-3xl hover:text-[#421e27] delay-75">
            Contacts
          </p>
          <p></p>
        </h1>
      </div>
    </>
  );
};

export default Header;
