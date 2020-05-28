import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { loadSingleGifs } from "../../components/redux/Giphy/giphy.action";
import SingleGifWrapper from "./style";

interface props {
  loading: boolean;
  item: any;
  error: boolean;
  filter: any;
  load: (args: any) => void;
  ClearFilter: () => void;
}

const SingleGif: React.FC<props> = ({ load, item, loading }) => {
  const { id } = useParams();
  console.log(id);
  console.log(item);

  useEffect(() => {
    load(id);
  }, [id]);

  return (
    <SingleGifWrapper>
      <div className="container" key={item ? item.id : ""}>
        <div className="left">
          <img
            src={item ? item.images.downsized_large.url : ""}
            alt={item ? item.username : ""}
          />
          <figcaption className="caption">
            {item ? item.user.display_name : ""}
          </figcaption>
        </div>
        <div className="right">
          <p>
            <span>username: </span>
            {item ? item.username : ""}
          </p>
          <p>
            {" "}
            <span>source :</span>
            {item ? item.source : ""}
          </p>
          <p>
            {" "}
            <span>Title:</span> {item ? item.source : ""}
          </p>
          <p>
            <span>Rating:</span> {item ? item.rating : ""}
          </p>
          <p>
            <span>source tld:</span> {item ? item.source_tld : ""}
          </p>
          <p>
            <span>source post:</span> {item ? item.source_post_url : ""}
          </p>
          <p>
            <span>Date:</span> {item ? item.import_datetime : ""}
          </p>
          <p>
            <span>is_verified:</span> {item ? item.user.is_verified: ""}
          </p>

          <p></p>
          {/* <ul>
           {item.episode.map((item, index) => (
            <li key={index}>{item}</li>
           ))}
        </ul> */}
        </div>
      </div>
    </SingleGifWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  item: state.Giphy.dataObj,
  error: state.Giphy.error,
  loading: state.Giphy.loading,
});

export default connect(mapStateToProps, { load: loadSingleGifs })(SingleGif);
