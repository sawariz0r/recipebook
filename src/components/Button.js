import React from 'react';
import Styled from "styled-components";

const StyledButton = Styled.button`
  padding: 10px 15px;
  border-radius: 4px;
  outline: none;
  border: none;
  background: #c3c3c3;
  color: #f3f3f3;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #02020260;
  margin: 5px 0;
  ${props => props.primary && "background: #319bf3"};
  ${props => props.success && "background: #4caf4f"};
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>{props.children}</StyledButton>
  )
}

export default Button
