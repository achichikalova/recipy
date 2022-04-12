import React from "react";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiHamburger, GiChopsticks } from "react-icons/gi";

const Category = () => {
  return (
    <div className="category">
      <NavLink to={'/cuisine/italian'}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>
      <NavLink to={'/cuisine/thai'}>
        <GiNoodles />
        <h3>Thai</h3>
      </NavLink>
      <NavLink to={'/cuisine/american'}>
        <GiHamburger />
        <h3>American</h3>
      </NavLink>
      <NavLink to={'/cuisine/japanese'}>
        <GiChopsticks />
        <h3>Japanese</h3>
      </NavLink>
    </div>
  );
};

export default Category;
