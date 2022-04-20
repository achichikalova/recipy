import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Recipe.scss";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaUserTimes } from "react-icons/fa";
import { WiTime5 } from "react-icons/wi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Recipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const params = useParams();

  const getRecipeInfo = async (id) => {
    const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
    await axios
      .get(URL)
      .then((res) => {
        setRecipeInfo(res.data);
        setIngredients(res.data.extendedIngredients);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRecipeInfo(params.id);
  }, [params.id]);

  const ingredient = ingredients.map((ingredient) => {
    return <li key={ingredient.id}>{ingredient.original}</li>;
  });

  return (
    <div className="recipe-info-container">
      <h1>{recipeInfo?.title}</h1>
      <div className="recipe-meta">
        <div className="meta">
          <AiFillLike />
          <h3>{recipeInfo?.aggregateLikes} likes</h3>
        </div>
        <div className="meta">
          <FaUserTimes />
          <h3>{recipeInfo?.servings} servings</h3>
        </div>
        <div className="meta">
          <WiTime5 />
          <h3>~ {recipeInfo?.readyInMinutes} min</h3>
        </div>
      </div>
      <div className="recipe-info">
        <div className="image">
          <img src={recipeInfo?.image} alt={recipeInfo?.title} />
          <p>
            {recipeInfo?.title}{" "}
            {recipeInfo?.sourceName && <span>By {recipeInfo?.sourceName}</span>}
          </p>
        </div>
        <Tabs className="tabs">
          <TabList>
            <Tab>Summary</Tab>
            <Tab>Ingredients</Tab>
            <Tab>Instructions</Tab>
          </TabList>
          <TabPanel>
            <p
              className="summary"
              dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
            ></p>
          </TabPanel>
          <TabPanel>
            <ul className="ingredients">{ingredient}</ul>
          </TabPanel>
          <TabPanel>
            <p
              className="instructions"
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Recipe;
