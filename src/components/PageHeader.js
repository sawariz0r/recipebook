import React from 'react';
import Styled from "styled-components";

const Image = Styled.div`
  position: relative;
  width: 100%;
  height: ${props => props.height ? props.height : "350px"};;
  img {
    width: 100%;
    height: ${props => props.height ? props.height : "350px"};;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    bottom: 15px;
    left: 0px;
    padding: 5px 15px;
    background: #fff;
    font-size: 2rem;
    font-weight: 600;

    &:after {
      content: "";
      position: absolute;
      right: -29px;
      top: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 40px 40px 0 0;
      border-color: #fff transparent transparent transparent;
    }
    &:before {
      content: "";
      position: absolute;
      right: -29px;
      bottom: 0;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 40px 0 0 40px;
      border-color: transparent transparent transparent #fff;
    }
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    z-index: 50;
  }
`;

const PageHeader = ({ imageUrl, height, title }) => {
  return (
    <>
      <Image height={height} >
        <img src={imageUrl} alt="" />
        {title && <h1>{title}</h1>}
      </Image>
    </>
  )
}

export default PageHeader
