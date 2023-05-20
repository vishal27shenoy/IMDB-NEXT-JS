import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="flex gap-3 justify-center h-16 dark:bg-slate-400 items-center bg-amber-100">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="TopRated" param="fetchTopRated" />
    </div>
  );
};

export default Navbar;
