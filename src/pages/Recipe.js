import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Recipe.scss";
import { useParams } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaUserTimes } from "react-icons/fa";
import { WiTime5 } from "react-icons/wi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";

const Recipe = () => {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const params = useParams();

  const getRecipeInfo = async (id) => {
    const URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY_SECOND}`;
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
    <motion.div
      className="recipe-info-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
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
            <motion.p
              className="summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
            ></motion.p>
          </TabPanel>
          <TabPanel>
            <motion.ul
              className="ingredients"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              {ingredient}
            </motion.ul>
          </TabPanel>
          <TabPanel>
            <motion.p
              className="instructions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></motion.p>
          </TabPanel>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Recipe;
