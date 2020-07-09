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
    flex-basis: 30%;
    margin: 2.5rem 1.5rem;
    position: relative;
    max-height: 500px !important;
  }
  .img-container {
    min-width: 50%;
    position: relative;
    background: #fff;
    /* height:auto; */
  }

  .img-reaction {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 400px !important;
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
  @media (max-width: 900px) {
    .gif-content {
      margin: 1.2rem 0rem;
    }
    .gif-item {
      flex-basis: 48%;
      max-height: 200px;
    }

    .img-reaction {
      max-height: 350px;
    }
  }

  @media (max-width: 600px) {
    .gif-content {
      margin: 1.2rem 0rem;
    }
    .gif-item {
      flex-basis: 38%;
      max-height: 200px;
      max-width:70%;
    }

    .img-reaction {
      max-height: 350px;
    }
  }

  /* @media (max-width: 600px) {
    .gif-content {
      margin: 0rem 0rem;
    }
    .gif-item {
      flex-basis: 100%;
      height: 200px;
    }
    .img-container {
      min-width: 100%;
      padding-bottom: 20%;
    }
    .img-reaction {
      max-height: 200px;
    }
  } */
  @media (max-width: 600px) {
    .gif-content {
      margin: 0rem 0rem;
    }
    .gif-item {
      flex-basis: 100%;
      max-height: 300px !important;
      margin: 2rem 0rem;
    }
    .img-container {
      max-width: 100%;
      padding-bottom: 20%;
    }
    .responsiveness {
      max-height: 300px !important;
    }
    .img-reaction {
      max-height: 300px !important;
    }
  }
`;

export default GifWrapper;
