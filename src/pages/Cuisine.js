import React, { useEffect, useState } from "react";
import "./Cuisine.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Category from "../components/Category";

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
      <div className="cuisine" key={cuisine.id}>
        <img src={cuisine.image} alt={cuisine.title} />
        <h4>{cuisine.title}</h4>
      </div>
    );
  });

  return (
    <div>
      <Category />
      <div className="cuisine-container">{cuisine}</div>);
    </div>
  );
};

export default Cuisine;
