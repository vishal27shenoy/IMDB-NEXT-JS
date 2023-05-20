"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
const NavbarItem = ({ title, param }) => {
  const searchParam = useSearchParams();
  const genre = searchParam.get("genre");
  return (
    <div className="flex justify-center">
      <Link
        href={`/?genre=${param}`}
        className={
          genre && genre == param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : ""
        }
      >
        {title}
      </Link>
    </div>
  );
};

export default NavbarItem;
