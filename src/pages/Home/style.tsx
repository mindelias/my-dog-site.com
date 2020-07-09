import styled from "styled-components";

const HomeWrapper = styled.div`
  /* background: linear-gradient(to right bottom, #3b0831, #450b2a); */
  background: #e6eeff;
  min-height: 100vh;
  color: white;
  padding: 8rem;
  .filter-container {
    margin: 2rem 0rem;
    width: 100%;
  }

  @media (max-width: 1200px) {
    padding: 3rem;
  }
  @media (max-width: 900px) {
    padding: 2rem;
  }
`;

export default HomeWrapper;
