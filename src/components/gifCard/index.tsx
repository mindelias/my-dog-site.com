import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadGifs, ClearFilter,loadnext } from "../redux/Giphy/giphy.action";
import GifItem from "./gifItem";
import GifWrapper from "./style";
import Placeholder from "../../components/Placeholder";
import { Grid, Pagination } from "semantic-ui-react";

interface props {
  loadnext: (args: any) => void;
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
  ClearFilter
}) => {
  console.log(data, filter);
  useEffect(() => {
    loadGif();
  }, [filter]);

  const handlePaginationChange = (_:any, arg:any) => {
    loadnext(arg.activePage);
  };

  const PaginationExamplePagination = () => (
    <Pagination
      defaultActivePage={1}
      onPageChange={handlePaginationChange}
      totalPages={67}
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
            filter.map((item: any) => <GifItem key={item.id} item={item} />)) ||
            (data.length > 0 &&
              data.map((item: any) => <GifItem key={item.id} item={item} />))}
        </div>
      )}
      <Grid centered>
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

export default connect(mapStateToProps, { loadGif: loadGifs ,ClearFilter, loadnext})(DisplayGifs);
