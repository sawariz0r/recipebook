import React, { useEffect, useState } from 'react';
import axios from "axios";
import foodImg from "./../foodimg.png";
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import Slider from '../components/Slider';
import BackButton from '../components/BackButton';
import Stars from '../components/Stars';
import Skeleton from 'react-loading-skeleton';

const SingleRecipe = (props) => {
  const [recipe, setRecipe] = useState(null);
  const [ingredientsChecked, setIngredientsChecked] = useState(null);
  const [stepsChecked, setStepsChecked] = useState(null);

  useEffect(() => {
    axios.get("/recipe?id=" + props.id)
      .then(res => {
        const ingredientsLength = res.data.ingredients.length;
        const ingredientsCheckedArray = new Array(ingredientsLength).fill(0);
        const stepsLength = res.data.steps.length;
        const stepsCheckedArray = new Array(stepsLength).fill(0);
        setStepsChecked(stepsCheckedArray);
        setIngredientsChecked(ingredientsCheckedArray);
        setRecipe(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  const getCheckedLength = () => {
    const checked = ingredientsChecked.filter(x => x === 1).length;
    return `${checked}/${ingredientsChecked.length}`
  }
  const getLength = (array) => {
    const checked = array.filter(x => x === 1).length;
    return `${checked}/${array.length}`
  }

  const handleClick = (i, name) => {
    let array;
    if (name === "ingredients") array = ingredientsChecked;
    if (name === "steps") array = stepsChecked;

    const newCheckedArray = [...array];
    newCheckedArray[i] = array[i] === 0 ? 1 : 0;

    if (name === "ingredients") setIngredientsChecked(newCheckedArray);
    if (name === "steps") setStepsChecked(newCheckedArray);
  }


  return (
    <div>
      <BackButton to="/recipes" />
      {
        recipe === null ?
          <>
            <Skeleton height="350px" />
            <PageContent>
              <Skeleton height="2.2em" style={{ marginTop: "21px"}} />
              <br />
              <Skeleton height="1.2em" width="140px" style={{ marginTop: "23px"}} />
              <br />
              <Skeleton height="1.9em" width="190px" style={{ marginTop: "32px"}} />
              <br />
              <Skeleton height="50px" width="50px" count="4" circle={true} style={{ margin: "23px 0 0 32px"}} />
              <br />
              <Skeleton height="1.9rem" width="90px" style={{ marginTop: "55px"}} />
            </PageContent>
          </>
          :
          <>
            <PageHeader imageUrl={recipe.imageUrl} />
            <PageContent inset="true">
              <h1>{recipe.name}</h1>
              <span style={{ fontWeight: 300 }}>Author: {recipe.authorName}<br />~20 min (Not actual data yet) <br /> <Stars count="4" /> (150) (Not actual data yet) </span>
              <h2>Ingredients ({getLength(ingredientsChecked)})</h2>
              <Slider>
                {
                  recipe.ingredients.map((ingredient, i) => {
                    const isChecked = ingredientsChecked[i] === 1;
                    return <div key={ingredient + i} style={{ opacity: isChecked ? 0.2 : 1 }} onClick={() => handleClick(i, "ingredients")}>
                      <img width="50px" height="50px" src={foodImg} style={{ borderRadius: "50%" }} alt="" />
                      {ingredient.amount}<br />{ingredient.name}
                    </div>
                  })
                }
              </Slider>

              <h2>Steps ({getLength(stepsChecked)})</h2>
              {
                recipe.steps.map((step, i) => {
                  const isChecked = stepsChecked[i] === 1;
                  return <p style={{ lineHeight: "1.65", marginBottom: "10px", opacity: isChecked ? 0.2 : 1  }} onClick={() => handleClick(i, "steps")} key={step + i}><h3 style={{ marginBottom: 0 }}>Step {i + 1}</h3> {step}</p>
                })
              }
            </PageContent>
          </>
      }
    </div>
  )
}

export default SingleRecipe
