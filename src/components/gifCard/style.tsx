import styled from "styled-components";

const GifWrapper = styled.div`
  .gif-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .gif-item {
    flex-basis: 20%;
    margin: 1.5rem;
    position: relative;
  }
  h5{
    margin-top:0
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