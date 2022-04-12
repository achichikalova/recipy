import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Popular from "../components/Popular";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Category />
      <Banner />
      <Popular />
    </div>
  );
};

export default Home;
