import React, { useEffect, useState } from "react";
import "./Cuisine.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
import RecipePreview from "../components/RecipePreview";
import { motion } from "framer-motion";

const Cuisine = ({ setError }) => {
  const [cuisines, setCuisines] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (type) => {
    const checkCuisine = localStorage.getItem(`${type}`);

    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY_THIRD}&cuisine=${type}&number=8`;

    if (checkCuisine) {
      setCuisines(JSON.parse(checkCuisine));
    } else {
      await axios
        .get(URL)
        .then((res) => {
          localStorage.setItem(`${type}`, JSON.stringify(res.data.results));
          setCuisines(res.data.results);
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 402 || error.response.status === 429) {
            setError(true);
          }
        });
    }
  };

  const cuisine = cuisines.map((cuisine) => {
    return <RecipePreview key={cuisine.id} recipe={cuisine} />;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Category />
      <div className="cuisine-container">{cuisine}</div>);
    </motion.div>
  );
};

export default Cuisine;
