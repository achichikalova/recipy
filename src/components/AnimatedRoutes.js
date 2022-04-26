import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Cuisine from "../pages/Cuisine";
import All from "../pages/All";
import Recipe from "../pages/Recipe";
import Type from "../pages/Type";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = ({ setError }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home setError={setError} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/all" element={<All setError={setError} />} />
        <Route path="/:type" element={<Type setError={setError} />} />
        <Route
          path="/cuisine/:type"
          element={<Cuisine setError={setError} />}
        />
        <Route path="/recipe/:id" element={<Recipe setError={setError} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
