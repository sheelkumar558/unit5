import styled from "styled-components";

export const Nav = styled.div`
  width: 100%;
  height: 5em;
  background-color: ${(props) =>
    props.theme === "light" ? "black" : "#d0e9ff"};
`;