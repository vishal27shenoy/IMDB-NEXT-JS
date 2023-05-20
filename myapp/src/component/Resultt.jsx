import React from "react";
import Card from "./Card";

const Resultt = ({ result }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {result &&
        result.map((result) => {
          return <Card result={result} />;
        })}
    </div>
  );
};

export default Resultt;
