import styled from "styled-components";

export const Title = styled.h1`
  background: green;
  color: ${(props) => (props.isRed ? "red" : "black")};
  small{
    font-size: 12pt;
    margin-left: 15px;
  }
  p{
    font-size: 30px;
  }
`;
