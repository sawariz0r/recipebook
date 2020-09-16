import React from 'react';
import { Router } from "@reach/router";
import Styled from "styled-components";

import SingleRecipe from './pages/SingleRecipe';
import RecipeList from './pages/RecipeList';
import Main from './pages/Main';
import Menu from './partials/Menu';
import AddRecipe from './pages/AddRecipe';

const Wrapper = Styled.div`
  width: 100%;
  max-width: 767px;
  height: 100%
`;

const App = () => {
  return (
    <Wrapper>
      <Menu />
      <Router>
        <Main path="/" />
        <RecipeList path="/recipes" />
        <SingleRecipe path="/recipe/:id" />
        <AddRecipe path="/add-recipe" />
      </Router>
    </Wrapper>
  );
}

export default App;
