import React from "react";
import { NavLink } from "react-router-dom";
import navbar from "./Navbar.module.css";

function Navbar() {

  return (
    <div className={navbar.container}>
      <button className={navbar.all}>
        <NavLink to="/all">Все</NavLink>
      </button>
      <button className={navbar.closed}>
        <NavLink to="/closed">Закрытые</NavLink>
      </button>
      <button className={navbar.grill}>
        <NavLink to="/grill">Гриль</NavLink>
      </button>
      <button className={navbar.meat}>
        <NavLink to="/meat">Мясные</NavLink>
      </button>
      <button className={navbar.spicy}>
        <NavLink to="/spicy">Острая</NavLink>
      </button>
      <button className={navbar.vegan}>
        <NavLink to="/vegan">Вегетарианская</NavLink>
      </button>
    </div>
  );
}

export default Navbar;
