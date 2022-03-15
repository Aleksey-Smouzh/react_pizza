import React from "react";
import grill from "./Grill.module.css";
import SamplePizza from "../../SamplePizza/SamplePizza";
function Grill() {
  return (
    <div className={grill.container}>
      <h1 className={grill.title}>Гриль</h1>
      <div className={grill.wrapper}>
        <div className={grill.blok1}>
          <SamplePizza />
        </div>
        <div className={grill.blok2}>
          <SamplePizza />
        </div>
        <div className={grill.blok3}>
          <SamplePizza />
        </div>
        <div className={grill.blok4}>
          <SamplePizza />
        </div>
        <div className={grill.blok5}>
          <SamplePizza />
        </div>
        <div className={grill.blok6}>
          <SamplePizza />
        </div>
        <div className={grill.blok7}>
          <SamplePizza />
        </div>
        <div className={grill.blok8}>
          <SamplePizza />
        </div>
      </div>
    </div>
  );
}

export default Grill;
