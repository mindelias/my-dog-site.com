import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Istate } from "../redux/Giphy/giphy.reducer";
import { FilterGifs, ClearFilter, loadGifs } from "../redux/Giphy/giphy.action";
import FilterWrapper from "./style";

interface props {
  filter: (args: any) => void;
  clear: () => void;
  load: () => void;
  loading: boolean;
  data: any;
  error: boolean;
}

const Search: React.FC<props> = ({ filter, clear ,load}) => {
  const [search, setSearch] = useState("");

  // useEffect(() => {}, [clear]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    setSearch(value);
    if (value === "") {
      console.log('no more search')
     clear()
     // window.location.reload()
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search !== "") {
      filter(search);
      // setSearch("");
    } else {
      clear();
      // load()
    }
  };

  return (
    <FilterWrapper className="form-inline col-8 " onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search all gifs and stickers"
        aria-label="Search"
        value={search}
        onChange={onChangeInput}
      />
      <button data-testid = 'search-button' type="submit">Search</button>
    </FilterWrapper>
  );
};

const mapStateToProps = (state: Istate) => ({
  data: state.dataArray,
  error: state.error,
  loading: state.loading,
});

export default connect(mapStateToProps, {
  filter: FilterGifs,
  clear: ClearFilter,
  load:loadGifs,
  
})(Search);
