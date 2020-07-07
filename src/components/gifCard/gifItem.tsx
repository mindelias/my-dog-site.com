import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

// function GifItem({ item, index }: any) {
//   return (
//     <Link to={"/gif/" + index}>
//       <div className="gif-item">
//         <img src={item} alt="smaples" />
//         <h1>{index}</h1>
//         {/* <h5 className="caption">{item.username}</h5> */}
//       </div>
//     </Link>
//   );
// }

// export default GifItem;



const MyImage = ({ image, index }: any) => (
  <Link to={"/gif/" + index}>
    <div className="gif-item">
      <LazyLoadImage
        alt="lazy-loads"
        src={image} // use normal <img> attributes as props
        effect="blur"
        placeholderSrc={image}
        className = 'img-reaction'
      />
      <span>{image.caption}</span>
    </div>
  </Link>
);

export default MyImage;