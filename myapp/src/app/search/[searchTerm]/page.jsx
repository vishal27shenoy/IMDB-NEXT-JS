import Resultt from "@/component/Resultt";
import React from "react";

const page = async ({ params }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=5d8e5815d556f0fb4cddff3f0a05c94c&query=${params.searchTerm}&language=en-US&include_adult=false`
  );
  if (!res.ok) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const result = data.results;
  return (
    <div>
      {result && result.length === 0 && (
        <h1 className="text-center pt-6 ">No Result Found</h1>
      )}
      {result && <Resultt result={result} />}
    </div>
  );
};

export default page;
