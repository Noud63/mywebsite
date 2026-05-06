import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData, Link } from "react-router-dom";

const PaintingInfo = () => {
  const painting = useLoaderData();

  return (
    <div className="h-screen text-black flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <span>Title: {painting?.title}</span>
        <span>Sub: {painting?.title_long}</span>
        <span>Year: {painting?.year}</span>
        <span>Technique: {painting?.technique}</span>
        <span>Size: {painting?.size}</span>
      </div>
      <div className="mt-12">
        <Link
          to="/"
          className="cursor-pointer border border-black text-black px-8 py-1 rounded-full"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default PaintingInfo;
