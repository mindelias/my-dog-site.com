import React from "react";
import { Link } from "react-router-dom";

function GifItem({ item }: any) {
  return (
    <Link to={"/gif/" + item.id}>
      <div key={item.id} className="gif-item">
        <img
          src={item.images.fixed_width_downsampled.url}
          alt={item.username}
        />
        <h5 className="caption">{item.username}</h5>
      </div>
    </Link>
  );
}

export default GifItem;
