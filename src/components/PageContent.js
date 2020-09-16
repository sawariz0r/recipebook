import React, { useEffect } from 'react';
import Styled from "styled-components";

const Content = Styled.div`
  padding: 10px 15px;
  padding-bottom: 70px;
  ${props => props.flex && "display: flex;"};
  ${props => props.direction && `flex-direction: ${props.direction};;`}; 
`;

const PageContent = ({ children, flex, direction, inset }) => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[])

  return (
    <Content flex={flex} direction={direction} inset={inset} >
      {children}
    </Content>
  )
}

export default PageContent
