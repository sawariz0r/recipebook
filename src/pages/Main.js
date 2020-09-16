import React from 'react';
import PageContent from '../components/PageContent'
import PageHeader from '../components/PageHeader';
import { FiShare, FiPlusSquare } from "react-icons/fi";
import headerImg from "./../images/pexels-audrey-mari-3421920.jpg";

const Main = () => {
  return (
    <div>
      <PageHeader imageUrl={headerImg} title="Oscars recipe book" />
      <PageContent>
        <p>A simple recipe app I made to share some of my favorite recipes. Some are my own, some are from my favorite recipe authors.</p>
        <p>I will add both new recipes and features every now and then. But if you feel like it's lacking something, feel free to upload your own recipes to the list!</p>
        <h2>How to "save" as an app (iOS, not sure about Android):</h2>
        <p>Press the <FiShare /> icon and choose the <FiPlusSquare /> Add to home screen option, enter a name and voila! You can now use it like a normal app!</p>
        <h2>Changelog</h2>
        <h3>Recipe progress - 16 sept</h3>
        <p>You're now able to press the step or ingredient to mark as done. Super handy if you lose track of where you were, and no more scanning through the entire recipe to find that one next step.</p>
        <h3>First MVP done - 15 sept</h3>
        <p>Finished setting up the server and wrote the client MVP (Minimum viable product), you're now able to add and read recipes!</p>
      </PageContent>
    </div>
  )
}

export default Main
