import React from "react";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Popular />
    </div>
  );
};

export default Home;
