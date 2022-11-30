import React from "react";
import { Movie } from "../shared/interface";
import MovieFavourite from "./MoviesFavourite";

const Movie = (props: Movie) => {
  return (
    <div className="relative group hover:scale-105 hover:cursor-pointer transition">
      <div className="mb-4 w-56 h-96 flex flex-col items-center justify-center flex-nowrap ">
        <h2 className="break-words truncate w-full text-center mb-4 z-20">
          {props.Title}
        </h2>
        <img width="200" className="max-h-80" src={props.Poster} alt="ERROR" />
      </div>
      <div onClick={() => props.addFavouriresClick(props)} className="invisible group-hover:visible absolute w-full bottom-3 p-2 rounded-xl left-0 right-0 text-center bg-black/80">
          Add to Favourite 💙
      </div>
    </div>
  );
};

export default Movie;
