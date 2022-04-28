import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Cuisine from "../pages/Cuisine";
import All from "../pages/All";
import Recipe from "../pages/Recipe";
import Type from "../pages/Type";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  const [error, setError] = useState();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home error={error} setError={setError} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/all" element={<All setError={setError} />} />
        <Route
          path="/:type"
          element={<Type error={error} setError={setError} />}
        />
        <Route
          path="/cuisine/:type"
          element={<Cuisine error={error} setError={setError} />}
        />
        <Route
          path="/recipe/:id"
          element={<Recipe error={error} setError={setError} />}
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
