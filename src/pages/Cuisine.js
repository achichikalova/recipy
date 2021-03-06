import React, { useEffect, useState } from "react";
import "./Cuisine.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Category from "../components/Category";
import RecipePreview from "../components/RecipePreview";
import { motion } from "framer-motion";
import Error from "../components/Error";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const [error, setError] = useState(false);

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
          setError(false);
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 402) {
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
      {error && <Error error={error} />}
    </motion.div>
  );
};

export default Cuisine;
