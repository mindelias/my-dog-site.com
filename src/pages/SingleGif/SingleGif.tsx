import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadSingleGifs,
  loadGifs,
} from "../../components/redux/Giphy/giphy.action";
import SingleGifWrapper from "./style";

interface props {
  loading: boolean;
  item: any;
  error: boolean;
  filter: any;
  data: any;
  loadGif: () => void;
  load: (args: number, arg2: any) => void;
  ClearFilter: () => void;
}

const SingleGif: React.FC<props> = ({ loadGif, load, data, item, loading }) => {
  const { index } = useParams();

  console.log(index);
  console.log(item);

  useEffect(() => {
    loadGif();
    load(+index, data);
    // load(id, data);
    // eslint-disable-next-line
  }, [index]);

  return (
    <SingleGifWrapper>
      <div className="container" key={item}>
        <div className="left">
          <img src={item ? item : ""} alt="dogs" />
          {/* <figcaption className="caption">
            {item ? item.user.display_name : ""}
          </figcaption> */}
        </div>
        <div className="right">
          <p>
            {/* <span>username: </span>
            {item ? item.username : ""} */}
          </p>
        </div>
      </div>
    </SingleGifWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.Giphy.dataArray,
  item: state.Giphy.dataObj,
  error: state.Giphy.error,
  loading: state.Giphy.loading,
});

export default connect(mapStateToProps, {
  load: loadSingleGifs,
  loadGif: loadGifs,
})(SingleGif);
