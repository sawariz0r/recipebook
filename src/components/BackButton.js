import { Link } from '@reach/router';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Styled from "styled-components";

const Button = Styled(Link)`
  position: fixed;
  top: 15px;
  left: 15px;
  background: #f3f3f3;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0c0c0c;
  box-shadow: 0 1px 1px rgba(0,0,0,0.01), 
              0 2px 2px rgba(0,0,0,0.01), 
              0 4px 4px rgba(0,0,0,0.01), 
              0 8px 8px rgba(0,0,0,0.01),
              0 16px 16px rgba(0,0,0,0.01);
`;

const BackButton = ({ to }) => {
  return (
    <Button to={to}>
      <IoIosArrowBack />
    </Button>
  )
}

export default BackButton
