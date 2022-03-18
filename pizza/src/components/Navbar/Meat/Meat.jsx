import React, {useState}from "react";
import meat from "./Meat.module.css";
import SamplePizza from "../../SamplePizza/SamplePizza";
function Meat(props) {
  return (
    <div className={meat.container}>
      <h1 className={meat.title}>Мясная</h1>
      <div className={meat.wrapper}>
        <div className={meat.blok1}>
          <SamplePizza />
        </div>
        <div className={meat.blok2}>
          <SamplePizza/>
        </div>
        <div className={meat.blok3}>
          <SamplePizza />
        </div>
        <div className={meat.blok4}>
          <SamplePizza />
        </div>
        <div className={meat.blok5}>
          <SamplePizza />
        </div>
        <div className={meat.blok6}>
          <SamplePizza />
        </div>
        <div className={meat.blok7}>
          <SamplePizza />
        </div>
        <div className={meat.blok8}>
          <SamplePizza />
        </div>
      </div>
    </div>
  );
}

export default Meat;
