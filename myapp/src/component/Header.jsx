import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import DarkAndLightModes from "./DarkAndLightModes";
const Header = () => {
  return (
    <div className="flex gap-3 justify-between mx-2 max-w-6xl sm:mx-auto items-center h-16">
      <div className="flex gap-3">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/About" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex space-x-5 justify-center items-center">
        <DarkAndLightModes />
        <Link href="/">
          <h2 className="text-2xl">
            {" "}
            <span className="font-sans bg-amber-500 text-xl p-1 rounded-xl">
              IMDB
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
