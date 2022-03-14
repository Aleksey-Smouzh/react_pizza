import React from "react";
import sample from "./Sample.module.css";
import imgPizza from "../img/Cheeseburger.svg";

function SamplePizza() {
  return (
    <div className={sample.container}>
      <img src={imgPizza} alt="" />
      <h2>pizza</h2>
      <button>тонкое</button>
      <button>традиционное</button>
      <button>26 см.</button>
      <button>30 см.</button>
      <button>40 см.</button>
      <button>+ Добавить</button>
    </div>
  );
}

export default SamplePizza;
