import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <NavLink to="/">
          Recipy
        </NavLink>
      </div>
      <nav className="nav">
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/search"
        >
          <FaSearch className="search" />
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/all"
        >
          All
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/dinner"
        >
          Dinner
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          to="/dessert"
        >
          Dessert
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
