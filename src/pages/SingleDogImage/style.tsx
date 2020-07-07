import styled from "styled-components";

const SingleGifWrapper = styled.div`
  padding: 8rem;
  background: #e6eeff;
  min-height: 100vh;
  .container {
    display: flex;
    /* justify-content:center; */
    align-items: center;
  }
  .right,
  .left {
    margin: 4rem 0rem;
  }
  .right {
    flex-basis: 50%;
    h2 {
      background: linear-gradient(to right bottom, #3b0831, #450b2a);
      -webkit-background-clip: text;
      color: transparent;
      text-decoration: underline;
      font-size:2rem;
    }
  }
  .left {
    position: relative;
    flex-basis: 45%;
    img {
      max-width: 650px;
    }
  }
  p {
    color: black;
    font-size: 18px;
    font-family:Arial, Helvetica, sans-serif;
  }
  span {
    font-weight: 700;
    margin-right: 5px;
    text-transform: capitalize;
  }
  .caption {
    position: absolute;
    bottom: 20%;
    font-size: 2rem;
    font-weight: 900;
    left: 15%;
    background: linear-gradient(to right bottom, #3b0831, #450b2a);
    -webkit-background-clip: text;
    color: transparent;
  }
`;
export default SingleGifWrapper;
