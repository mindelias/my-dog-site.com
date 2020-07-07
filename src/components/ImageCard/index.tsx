import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadGifs, ClearFilter, loadnext } from "../redux/ImagesRedux/getImages.action";
import GifItem from "./ImageCard";
import GifWrapper from "./style";
import Placeholder from "../Placeholder";
import { Grid, Pagination } from "semantic-ui-react";
import { useState } from "react";

interface props {
  loadnext: (args: any, args2:any) => void;
  loading: boolean;
  data: any;
  error: boolean;
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
   useEffect(() => {
    loadGif();
    // eslint-disable-next-line
  }, [filter]);
   const [start, setStart] = useState(0)
   const [next, setNext] = useState(100);

  const handlePaginationChange = (_: any, arg: any) => {
    setStart(start+100)
    setNext(next + 100);
    // loadnext(next, data);
  };

  const PaginationExamplePagination = () => (
    <Pagination
      defaultActivePage={1}
      onPageChange={handlePaginationChange}
      totalPages={data.length/100}
    />
  );

  return (
    <GifWrapper className="gif-container">
      {error && <h1 className="">.....something went wrong</h1>}
      {data && data.length === 0 && loading ? (
        <Placeholder />
      ) : (
        <div className="gif-content">
          {(filter.length &&
            filter.map((item: any, index: number) => (
              <GifItem key={index} item={item} />
            ))) ||
            (data.length > 0 &&
              data
                .slice(start, next)
                .map((item: any, index: number) => (
                  <GifItem key={index} index={index} image={item} />
                )))}
        </div>
      )}
      <Grid centered className="pagination">
        <PaginationExamplePagination />
      </Grid>
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
