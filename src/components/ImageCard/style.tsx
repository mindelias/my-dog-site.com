import styled from "styled-components";

const GifWrapper = styled.div`
  .gif-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 2.5rem 0rem;
    width: 100%;
  }
  .gif-item {
    flex-basis: 20%;
    margin: 1rem 1.5rem;
    position: relative;
  }
  .img-reaction {
    max-height: 400px;
    max-width: 400px;
    &:hover {
      transform: scaleY(1.1);
      border: 10px solid #f5fdff;
      height: auto;
      width: 100%;
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