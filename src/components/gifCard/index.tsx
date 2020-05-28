import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadGifs, ClearFilter } from "../redux/Giphy/giphy.action";
import { Istate } from "../redux/Giphy/giphy.reducer";
import GifItem from "./gifItem";
import GifWrapper from "./style";
import Placeholder from "../../components/Placeholder";
import { Grid, Pagination } from "semantic-ui-react";

interface props {
  // reg: (args: any) => void;
  loading: boolean;
  data: any;
  error: boolean;
  filter: any;
  loadGif: () => void;
  ClearFilter: () => void;
}

const DisplayGifs: React.FC<props> = ({
  loadGif,
  data,
  error,
  filter,
  loading,
  ClearFilter
}) => {
  console.log(data, filter);
  useEffect(() => {
    loadGif();
  }, [filter]);

  return (
    <GifWrapper className="gif-container">
      {error && <h1 className= ''>.....something went wrong</h1>}
      {data && data.length === 0 && loading ? (
        <Placeholder />
      ) : (
        <div className="gif-content">
         {(filter.length && filter.map((item: any) => (<GifItem key={item.id} item={item} />))) ||
          (data.length > 0 && 
            data.map((item: any) => (<GifItem key={item.id} item={item} />)))
             }

        </div>
      )}
    </GifWrapper>
  );
};

{
  /* {data.length > 0 &&
            data.map((item: any) => (
              <div key={item.id} className="gif-item">
                <img
                  src={item.images.fixed_width_downsampled.url}
                  alt={item.username}
                />
                <h5>{item.username}</h5>
              </div>
            ))} */
}

const mapStateToProps = (state: any) => ({
  data: state.Giphy.dataArray,
  error: state.Giphy.error,
  loading: state.Giphy.loading,
  filter: state.Giphy.filter,
});

export default connect(mapStateToProps, { loadGif: loadGifs ,ClearFilter})(DisplayGifs);
