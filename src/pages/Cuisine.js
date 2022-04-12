import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipePreview from "../components/RecipePreview";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  console.log(cuisines);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  const getCuisine = async (type) => {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${type}`;

    await axios
      .get(URL)
      .then((res) => {
        setCuisines(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cuisine = cuisines.map((cuisine) => {
    return (
      <div key={cuisine.id}>
        <img src={cuisine.image} alt={cuisine.title} />
        <h4>{cuisine.title}</h4>
      </div>
    );
  });

  return <div>{cuisine}</div>;
};

export default Cuisine;
