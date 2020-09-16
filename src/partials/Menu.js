import { Link } from '@reach/router'
import React from 'react';
import { FcHome, FcList, FcPlus } from 'react-icons/fc';
import Styled from "styled-components";

const Wrapper = Styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f3f3f3;
  height: 60px;
  align-items: center;
  justify-content: center;
  z-index: 100;

  > a {
    font-size: 1.8rem;
    text-decoration: none;
    padding: 0 30px;
  }
`; 

const Menu = () => {
  return (
    <Wrapper>
      <Link to="/"><FcHome /></Link>
      <Link to="/recipes"><FcList /></Link>
      <Link to="/add-recipe"><FcPlus /></Link>
    </Wrapper>
  )
}

export default Menu
