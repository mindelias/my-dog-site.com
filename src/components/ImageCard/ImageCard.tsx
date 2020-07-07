import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MyImage = ({ image, index }: any) => (
  <Link to={"/gif/" + index}>
    <div className="gif-item">
      <LazyLoadImage
        alt="lazy-loads"
        src={image}
        effect="blur"
        placeholderSrc={image}
        className="img-reaction"
      />
       
    </div>
  </Link>
);

export default MyImage;
