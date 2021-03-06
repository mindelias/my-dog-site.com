import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import {
  loadGifs,
  ClearFilter,
  loadnext,
} from "../redux/ImagesRedux/getImages.action";
import GifItem from "./ImageCard";
import GifWrapper from "./style";
import Placeholder from "../Placeholder";

interface props {
  loadnext: (args: any, args2: any) => void;
  loading: boolean;
  data: any;
  error: any;
  filter: any;
  loadGif: () => void;
  ClearFilter: () => void;
}

const DisplayGifs: React.FC<props> = ({
  loadGif,
  loadnext,
  data,
  error,
  filter,
  loading,
  ClearFilter,
}) => {
  const history = useHistory();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    loadGif();
    // eslint-disable-next-line
  }, [filter, error]);

  // const handlePaginationChange = (_: any, arg: any) => {
  //   setActive(arg.activePage);
  //   setStart(start + 100);
  //   setNext(next + 100);
  // };

  return (
    <GifWrapper className="gif-container">
      {/* {error && (
        <h1 className="error">Breed not found or breed does nto exist</h1>
      )} */}
      {loading ? (
      <Placeholder />) : (
      <div className="gif-content">
        {(error && (
          <h1 className="error">Breed not found | breed does not exist</h1>
        )) ||
          (filter.length > 0 &&
            filter.map((item: any, index: number) => (
              <GifItem key={index} image={item} />
            ))) ||
          (data.length > 0 &&
            data.map((item: any, index: number) => (
              <GifItem
                key={index}
                image={item}
                click={() => {
                  localStorage.setItem('item', item)
                  history.push(`/gif/${index}`)
                }}
              />
            )))}
      </div>
      )}
      <button>
        <a href="/">Go back</a>
      </button>
    </GifWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  data: state.Giphy.dataArray,
  error: state.Giphy.error,
  loading: state.Giphy.loading,
  filter: state.Giphy.filter,
});

export default connect(mapStateToProps, {
  loadGif: loadGifs,
  ClearFilter,
  loadnext,
})(DisplayGifs);
