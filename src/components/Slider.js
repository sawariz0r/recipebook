import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
  display: flex;
  overflow-x: auto;

  > div {
    min-width: 90px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &::-webkit-scrollbar { display: none; }
`;

const Slider = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}

export default Slider
