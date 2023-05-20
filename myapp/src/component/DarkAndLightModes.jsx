"use client";
import React, { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";
const DarkAndLightModes = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currTheme = theme == "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
    console.log(theme);
  }, [theme]);
  return (
    <>
      {console.log(theme)}
      {mounted && currTheme == "dark" ? (
        <BsFillSunFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BsFillMoonFill
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkAndLightModes;
