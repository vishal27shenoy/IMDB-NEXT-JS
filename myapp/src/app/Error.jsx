"use client";
import { useEffect } from "react";
import React from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Somethine went wrong</h1>
      <button onClick={() => reset()} className="hover:text-amber-500">
        Try Again
      </button>
    </div>
  );
};

export default Error;
