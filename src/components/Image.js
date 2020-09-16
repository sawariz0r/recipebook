import React from 'react'
import Styled from "styled-components";

const ImgWrapper = Styled.div`
  position: relative;
  height: ${props => props.height};;
  width: ${props => props.width};;

  img {
    position: absolute;
    left: 0;
    height: ${props => props.height};;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

const Image = (props) => {
  return (
    <ImgWrapper {...props}>
      <img src={props.src} alt="" />
    </ImgWrapper>
  )
}

export default Image
