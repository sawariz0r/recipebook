import { navigate } from '@reach/router';
import { findByLabelText } from '@testing-library/react';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import Button from '../components/Button';
import Input from '../components/Input';
import PageContent from '../components/PageContent';
import PageHeader from '../components/PageHeader';
import headerImg from "./../images/pexels-andrea-piacquadio-3768146.jpg";

const AddRecipe = () => {
  const initialFields = { name: "", ingredients: [], steps: [], imageUrl: "" };
  const [fields, setFields] = useState(initialFields);

  const handleFieldChange = (e) => {
    const name = e.currentTarget.name;
    setFields({ ...fields, [name]: e.currentTarget.value })
  }
  const handleIngredientChange = (e, i) => {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    const newFields = { ...fields };

    newFields.ingredients[i][name] = value;
    setFields(newFields);
  }
  const handleStepChange = (e, i) => {
    const value = e.currentTarget.value;
    const newFields = { ...fields };
    newFields.steps[i] = value;
    setFields(newFields);
  }
  const handleImageUpload = (link) => {
    setFields({ ...fields, imageUrl: link })
  }

  const handleRecipeUpload = () => {
    // Checks here

    axios.post("/recipes", fields)
      .then(res => {
        console.log(res.data);
        navigate("/recipe/"+res.data.id);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const addIngredient = () => {
    setFields({ ...fields, ingredients: [...fields.ingredients, { name: "", amount: "" }] });
  }
  const addStep = () => {
    setFields({ ...fields, steps: [...fields.steps, ""] });
  }

  return (
    <div>
      <PageHeader title="Add a new Recipe" height="200px" imageUrl={headerImg} />
      <PageContent flex direction="column">
        <h2>Recipe Author</h2>
        <Input placeholder="You?" name="authorName" value={fields.AuthorName} onChange={handleFieldChange} />

        <h2>Recipe Name</h2>
        <Input placeholder="Recipe name" name="name" value={fields.name} onChange={handleFieldChange} />

        <h2>Image</h2>
        <Input type="image" onUpload={handleImageUpload} />

        <h2>Ingredients</h2>
        {
          fields.ingredients.map((field, i) => (
            <Input type="ingredient"
              ingredientValue={fields.ingredients[i].name}
              onIngredientChange={e => handleIngredientChange(e, i)}
              amountValue={fields.ingredients[i].amount} />
          ))
        }
        <Button primary onClick={addIngredient}>+</Button>

        <h2>Steps</h2>
        {
          fields.steps.map((field, i) => (
            <Input type="step" value={fields.steps[i]} onChange={e => handleStepChange(e, i)} />
          ))
        }
        <Button primary onClick={addStep}>+</Button>

        <h2>Done?</h2>
        <Button success onClick={handleRecipeUpload}>Save recipe</Button>

      </PageContent>
    </div>
  )
}

export default AddRecipe
