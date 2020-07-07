import styled from "styled-components";

const SingleGifWrapper = styled.div`
  padding: 8rem;
  background: linear-gradient(to right bottom, #3b0831, #450b2a);
  height:100vh;
  .container {
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .right,
  .left {
    margin: 5rem;
  }
  .left {
    position: relative;
    
  }
  p {
    color: white;
    font-size: 18px;
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
    left:15%;
    background:linear-gradient(to right bottom, #3b0831, #450b2a);
    -webkit-background-clip:text;
    color:transparent;
  }
`;
export default SingleGifWrapper;
