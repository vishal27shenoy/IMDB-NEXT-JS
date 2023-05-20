import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const movieID = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=5d8e5815d556f0fb4cddff3f0a05c94c&language=en-US`
  );
  const movie = await res.json();
  return (
    <div className="w-full">
      <div className="p-4 md:p-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          className="lg:rounded-lg"
          alt="image not found"
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3 font-semibold mr-1 font-thin">
            <span className="font-semibold mr-1">OverView :</span>
            {movie.overview}
          </p>
          <p className="mb-3 font-thin">
            <span className="font-semibold mr-1">Date Released : </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3 font-thin">
            <span className="font-semibold mr-1">Rating : </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
