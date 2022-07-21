/* eslint-disable react/jsx-key */
// import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
function Results({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => {
        return (
          <div className="group cursor-pointer p-2 transision duration-100   transform sm:hover:scale-105 hover:z-50">
            <Image
              layout="responsive"
              src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                `${BASE_URL}${result.poster_path}`
              }
              height={1080}
              width={1920}
              alt=""
            />
            <div className="p-2">
              <p className="truncate max-w-md">{result.overview}</p>
              <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                {result.title || result.original_name}
              </h2>
              <p className="flex items-center opacity-0 group-hover:opacity-100">
                {result.media_type && `${result.media_type}`}{" "}
                {result.release_date || result.first_air_date} <ThumbUpIcon className="h-5 mx-2" />{" "}
                {result.vote_count}
              </p>
            </div>
          </div>
        );
      })}
    </FlipMove>
  );
}

export default Results;
