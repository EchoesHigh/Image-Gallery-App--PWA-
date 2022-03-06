import React from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import Card from "./Card";
import FormImg from "./FormImg";
import Loading from "./Loading";
import Masonry from "react-masonry-css";
import "../styles/Cards.css";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchImages();

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <>
      <FormImg handleSubmit={handleSubmit} />
      <hr />

      {loading && <Loading />}

      <div className="mt-5">
        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((img) => {
            return (
              <div key={img.id}>
                <Card img={img.urls.regular} />
              </div>
            );
          })}
        </Masonry>
      </div>
    </>
  );
};

export default Cards;
