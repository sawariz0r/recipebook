import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from '@reach/router';
import PageContent from '../components/PageContent';
import PageHeader from "../components/PageHeader";
import Styled from "styled-components";
import Image from '../components/Image';
import { IoIosArrowForward } from "react-icons/io";
import Stars from '../components/Stars';
import Skeleton from 'react-loading-skeleton';

import foodImg from "./../foodimg.jpg";
import headerImg from "./../images/pexels-karolina-grabowska-4084641.jpg";

const Recipe = Styled(Link)`
  height: 80px;
  padding: 20px 10px 20px 8px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #c3c3c390;
  position: relative;
  color: #0c0c0c;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.01), 
              0 2px 2px rgba(0,0,0,0.01), 
              0 4px 4px rgba(0,0,0,0.01), 
              0 8px 8px rgba(0,0,0,0.01),
              0 16px 16px rgba(0,0,0,0.01);

  img {
    border-radius: 4px;
  }
`;

const Arrow = Styled(IoIosArrowForward)`
  position: absolute;
  right: 15px;
  font-size: 24px;
  color: #c3c3c3;
`;

const Title = Styled.span`
  position: absolute;
  top: 13px;
  left: 75px;
  font-weight: 600;
  font-size: 1rem;
`;

const Subtitle = Styled.span`
  position: absolute;
  left: 75px;
  bottom: 16px;
  font-weight: 300;
`;


const RecipeList = (props) => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    axios.get("/recipes")
      .then(res => {
        console.log(res);
        setRecipes(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])


  return (
    <>
      <PageHeader title="Recipes" height="200px" imageUrl={headerImg} />
      <PageContent>
        {
          recipes === null && <>
            <Skeleton count="10" height="80px" />
          </>
        }
        {
          recipes && recipes.map(recipe => (
            <Recipe to={`/recipe/${recipe.id}`}>
              <Image src={recipe.imageUrl} height="60px" width="60px" />
              <Title>{recipe.name}</Title>
              <Subtitle>25 min | <Stars count="4" /> (150)</Subtitle>
              <Arrow />
            </Recipe>
          ))
        }
      </PageContent>
    </>
  )
}

export default RecipeList
