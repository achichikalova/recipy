import React from "react";
import Banner from "../components/Banner";
import Popular from "../components/Popular";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = ({ setError }) => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <Banner setError={setError} />
      <Popular setError={setError} />
    </motion.div>
  );
};

export default Home;
