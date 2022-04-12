import React from "react";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiHamburger, GiSushis, GiTacos, GiChiliPepper } from "react-icons/gi";
import { MdOutlineRamenDining } from "react-icons/md";
import {BiDish} from 'react-icons/bi'

const Category = () => {
  return (
    <div className="category">
      <NavLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>
      <NavLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h3>Thai</h3>
      </NavLink>
      <NavLink to={"/cuisine/american"}>
        <GiHamburger />
        <h3>American</h3>
      </NavLink>
      <NavLink to={"/cuisine/japanese"}>
        <GiSushis />
        <h3>Japanese</h3>
      </NavLink>
      <NavLink to={"/cuisine/mexican"}>
        <GiTacos />
        <h3>Mexican</h3>
      </NavLink>
      <NavLink to={"/cuisine/korean"}>
        <MdOutlineRamenDining />
        <h3>Korean</h3>
      </NavLink>
      <NavLink to={"/cuisine/european"}>
        <BiDish />
        <h3>European</h3>
      </NavLink>
      <NavLink to={"/cuisine/indian"}>
        <GiChiliPepper />
        <h3>Indian</h3>
      </NavLink>
    </div>
  );
};

export default Category;
