import styled from 'styled-components'

const FilterWrapper = styled.form`
  width: 98%;
  display: flex;
  font-family: "Roboto";
  justify-content: center;
  transition: all .3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  input,
  button {
    border-radius: 20px 0px 0px 20px;
    border: none;
  }
  input {
    width: 70%;
    padding: 1rem 2rem;
    &:focus {
      outline: none;

    }
  }
  button {
    padding: 1rem;
    border-radius: 0px 20px 20px 0px;
    background: linear-gradient(to right bottom, #3b0831, #660011);
    color: white;
  }
`;
export default FilterWrapper;
