import styled from "styled-components";


const Flex = styled.div`
  display:flex ;
  justify-content:center ;

  & div:nth-child(odd){
      color:red ;
      border: 1px solid red;
  }
 
`;
export {Flex};