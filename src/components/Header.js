import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <NavLink exact to="/">
          Recipy
        </NavLink>
      </div>
      <nav className="nav">
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          exact
          to="/search"
        >
          <AiOutlineSearch />
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          exact
          to="/all"
        >
          All
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          exact
          to="/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          exact
          to="/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          exact
          to="/dinner"
        >
          Dinner
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          exact
          to="/dessert"
        >
          Dessert
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "link")}
          exact
          to="/cuisine"
        >
          Cuisine
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
