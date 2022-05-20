import React from "react";
import "./Category.scss";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import {
  GiNoodles,
  GiHamburger,
  GiSushis,
  GiChiliPepper,
} from "react-icons/gi";
import { MdOutlineRamenDining } from "react-icons/md";
import { BiDish } from "react-icons/bi";

const Category = () => {
  return (
    <div className="category">
      <NavLink
        className={(navData) => (navData.isActive ? "active link" : "link")}
        to={"/cuisine/italian"}
      >
        <FaPizzaSlice />
        <h3>Italian</h3>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active link" : "link")}
        to={"/cuisine/thai"}
      >
        <GiNoodles />
        <h3>Thai</h3>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active link" : "link")}
        to={"/cuisine/american"}
      >
        <GiHamburger />
        <h3>American</h3>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active link" : "link")}
        to={"/cuisine/japanese"}
      >
        <GiSushis />
        <h3>Japanese</h3>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active link" : "link")}
        to={"/cuisine/korean"}
      >
        <MdOutlineRamenDining />
        <h3>Korean</h3>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active link" : "link")}
        to={"/cuisine/european"}
      >
        <BiDish />
        <h3>European</h3>
      </NavLink>
      <NavLink
        className={(navData) => (navData.isActive ? "active link" : "link")}
        to={"/cuisine/indian"}
      >
        <GiChiliPepper />
        <h3>Indian</h3>
      </NavLink>
    </div>
  );
};

export default Category;
