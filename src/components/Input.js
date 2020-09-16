import React, { useState } from 'react'
import Styled from "styled-components";
import RETextArea from "react-expanding-textarea";
import Button from './Button';
import { IoIosCamera } from 'react-icons/io';
import { FcUpload, FcOk } from "react-icons/fc";
import axios from "axios";

// id dc0c02d5d087c67

const InputField = Styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 4px;
  outline: none;
  border: none;
  border-bottom: 2px solid #c3c3c390;
  &:focus {
    border-bottom: 2px solid #c0c0c0;
    }
  margin: 5px 0;
  font-size: 16px;
  color: #0c0c0c;
`;

const TextArea = Styled(RETextArea)`
  width: 100%;
  font-family: "open sans";
  padding: 10px 15px;
  border-radius: 4px;
  outline: none;
  border: none;
  border-bottom: 2px solid #c3c3c390;
  &:focus {
  border-bottom: 2px solid #c0c0c0;
  }

  margin: 5px 0;
  font-size: 16px;
`;

const IngredientWrapper = Styled.div`
  display: flex;
  > input:first-child {
    width: 35%;
    margin-right: 5px;
  }
`;

const Input = (props) => {
  const [image, setImage] = useState(null);
  const [done, setDone] = useState(false);

  const handleImgUpload = (e) => {
    const file = e.currentTarget.files[0];
    setImage(file);

    const formData = new FormData();
    formData.append("image", file);
    
    axios.post("https://api.imgur.com/3/image", formData, {
      headers: {
        "Authorization": "Client-ID dc0c02d5d087c67"
      }
    })
    .then(res => {
      const link = res.data.data.link;
      props.onUpload(link);
      setDone(true);
    })
    .catch(err => {
      console.error(err);
    })
  }

  if (props.type === "ingredient") return (
    <IngredientWrapper>
      <InputField type="text" name="amount" value={props.amountValue} onChange={props.onIngredientChange} placeholder="Qty" />
      <InputField type="text" name="name" value={props.ingredientValue} onChange={props.onIngredientChange} placeholder="Ingredient" />
    </IngredientWrapper>
  )
  if (props.type === "step") return (
    <TextArea
      placeholder="Describe this step"
      value={props.value}
      onChange={props.onChange}
    />
  )
  if (props.type === "image") return (
    <>
      <InputField style={{ display: "none" }} id="imageUpload" type="file" ref={props.ref} onChange={handleImgUpload} />
      {image && <p>{done ? <FcOk/> : <FcUpload />}{image.name}</p>}
      <Button primary onClick={() => document.querySelector("#imageUpload").click()}><IoIosCamera style={{ marginRight: "5px" }} /></Button>
    </>
  )
  return (
    <InputField type="text" {...props} />
  )
}

export default Input
