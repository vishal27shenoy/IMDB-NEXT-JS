import Image from "next/image";
import Resultt from "@/component/Resultt";
const API_KEY = "5d8e5815d556f0fb4cddff3f0a05c94c";
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre == "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  if (!res.ok) {
    throw new Error("This is Error");
  }
  const data = await res.json();
  const Result = data.results;
  return (
    <>
      <div>
        <Resultt result={Result} />
      </div>
    </>
  );
}
