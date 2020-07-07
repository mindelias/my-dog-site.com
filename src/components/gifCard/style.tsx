import styled from "styled-components";

const GifWrapper = styled.div`
  .gif-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2.5rem 0rem;
    width:100%;
  }
  .gif-item {
    flex-basis: 20%;
    margin: 1.5rem;
    position: relative;
  }
  .img-reaction {
    &:hover {
      transform: scaleY(1.1);
      border: 5px solid white;
      height:auto;
      width:100%;
    }
  }
  h5 {
    margin-top: 0;
  }
  .pagination {
    margin-top: 3rem;
  }
  /* .caption {
    position: absolute;
    bottom: 20%;
    font-size: 1.5rem;
    font-weight: 900;
    left: 10%;
    color: white;
  } */
`;

export default GifWrapper;