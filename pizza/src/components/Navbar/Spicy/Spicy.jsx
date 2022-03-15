import React from "react";
import spicy from "./Spicy.module.css";
import SamplePizza from "../../SamplePizza/SamplePizza";
function Spicy() {
  return (
    <div className={spicy.container}>
      <h1 className={spicy.title}>Острая</h1>
      <div className={spicy.wrapper}>
        <div className={spicy.blok1}>
          <SamplePizza />
        </div>
        <div className={spicy.blok2}>
          <SamplePizza />
        </div>
        <div className={spicy.blok3}>
          <SamplePizza />
        </div>
        <div className={spicy.blok4}>
          <SamplePizza />
        </div>
        <div className={spicy.blok5}>
          <SamplePizza />
        </div>
        <div className={spicy.blok6}>
          <SamplePizza />
        </div>
        <div className={spicy.blok7}>
          <SamplePizza />
        </div>
        <div className={spicy.blok8}>
          <SamplePizza />
        </div>
      </div>
    </div>
  );
}

export default Spicy;
